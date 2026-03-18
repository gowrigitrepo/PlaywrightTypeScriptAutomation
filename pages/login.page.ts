import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    //getByPlaceholder is more resilient to changes in the UI than css selectors
    this.username = page.getByPlaceholder('Enter Your Username');
    this.password = page.getByPlaceholder('Enter Your Password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  }

 async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}