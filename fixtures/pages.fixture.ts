import { HomePage } from '../pages/homePage';
import { TeamPage } from '../pages/teamPage';

// Import authentication fixtures and their types from the other file.
import { test as authTest, AuthFixtures } from './auth.fixture';

// Extend the 'authTest' object with both the authentication fixtures and your page fixtures.
export const test = authTest.extend<AuthFixtures & {
  homePage: HomePage;
  teamPage: TeamPage;
}>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  teamPage: async ({ page }, use) => {
    const teamPage = new TeamPage(page);
    await use(teamPage);
  },
});

export { expect } from '@playwright/test';