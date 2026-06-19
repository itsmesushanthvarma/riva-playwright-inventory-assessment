import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly searchInput: Locator;
  readonly categoryFilter: Locator;
  readonly addProductButton: Locator;
  readonly logoutButton: Locator;
  readonly productCards: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByTestId('search-input');
    this.categoryFilter = page.getByTestId('category-filter');
    this.addProductButton = page.getByTestId('add-product-button');
    this.logoutButton = page.getByTestId('logout-button');
    this.productCards = page.locator('[data-testid^="product-card-"]');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.searchInput).toBeVisible();
    await expect(this.categoryFilter).toBeVisible();
    await expect(this.addProductButton).toBeVisible();
    await expect(this.logoutButton).toBeVisible();
  }

  async searchForProduct(productName: string) {
    await this.searchInput.fill(productName);
  }

  async getVisibleProductCount() {
    return await this.productCards.count();
  }

  async verifyProductVisible(productName: string) {
    await expect(
      this.page.getByText(productName, { exact: true })
    ).toBeVisible();
  }

  async verifyProductNotVisible(productName: string) {
    await expect(
      this.page.getByText(productName, { exact: true })
    ).toHaveCount(0);
  }
}