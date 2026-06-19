import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory Search', () => {
  test('should filter products by search text and restore results when search is cleared', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login();

    await inventoryPage.verifyInventoryPageLoaded();

    await inventoryPage.verifyProductVisible('Wireless Mouse');
    await inventoryPage.verifyProductVisible('Coffee Maker');

    await inventoryPage.searchForProduct('Mouse');

    await inventoryPage.verifyProductVisible('Wireless Mouse');
    await inventoryPage.verifyProductNotVisible('Coffee Maker');

    await inventoryPage.searchForProduct('');

    await inventoryPage.verifyProductVisible('Wireless Mouse');
    await inventoryPage.verifyProductVisible('Coffee Maker');
  });
});