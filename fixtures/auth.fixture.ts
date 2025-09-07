// tests/fixtures/auth.fixture.ts

import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// Define the type for our custom fixture
export type AuthFixtures = {
  adminPage: Page;
  memberPage: Page;
};

export const test = base.extend<AuthFixtures>({
  adminPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_USERNAME as string,
      process.env.ADMIN_PASSWORD as string
    );
    await use(page);
  },

  memberPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.MEMBER_USERNAME as string,
      process.env.MEMBER_PASSWORD as string
    );
    await use(page);
  },
});

export { expect } from '@playwright/test';