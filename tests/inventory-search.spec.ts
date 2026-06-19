import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory Search', () => {

  test('should filter products based on search text', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login();

    await inventoryPage.verifyInventoryPageLoaded();

    const initialCount =
      await inventoryPage.getVisibleProductCount();

    await inventoryPage.searchForProduct('Wireless');

    await inventoryPage.verifyProductVisible('Wireless Mouse');

    await inventoryPage.verifyProductNotVisible('Coffee Maker');

    const filteredCount =
      await inventoryPage.getVisibleProductCount();

    expect(filteredCount).toBeLessThan(initialCount);

  });

});