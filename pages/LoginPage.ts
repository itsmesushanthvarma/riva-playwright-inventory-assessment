import { Page, Locator, expect } from '@playwright/test';
import { validUser } from '../test-data/credentials';

export class LoginPage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.emailInput = page.getByTestId('login-email');
    this.passwordInput = page.getByTestId('login-password');
    this.loginButton = page.getByTestId('login-button');
  }

  async goto() {
    await this.page.goto('/index.html');
  }

  async login(
    email = validUser.email,
    password = validUser.password
  ) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginPageLoaded() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}