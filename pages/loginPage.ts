import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly continueButton: Locator;
  private readonly loginButton: Locator;

  constructor(public readonly page: Page) {
    this.usernameInput = this.page.getByTestId('username');
    this.passwordInput = this.page.getByTestId('password');
    this.continueButton = this.page.locator('#login-submit'); 
    this.loginButton = this.page.getByTestId('login-submit-idf-testid');
  }

  async goto() {
    await this.page.goto('https://id.atlassian.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.continueButton.click();
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}