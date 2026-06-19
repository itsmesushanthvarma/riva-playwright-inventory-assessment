import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login navigation', () => {
  test('should login with valid credentials and display inventory dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();

    await loginPage.login();

    await inventoryPage.verifyInventoryPageLoaded();
  });
});