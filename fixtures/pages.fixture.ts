import { HomePage } from '../pages/homePage';
import { TeamPage } from '../pages/teamPage';
import { Eyes, Target } from '@applitools/eyes-playwright';

// Import authentication fixtures and their types from the other file.
import { test as authTest, AuthFixtures } from './auth.fixture';

type ApplitoolsFixtures = {
  eyes: Eyes;
};

// Combine all your fixture types
type AllFixtures = AuthFixtures & {
  homePage: HomePage;
  teamPage: TeamPage;
} & ApplitoolsFixtures;

export const test = authTest.extend<AllFixtures>({
  // Applitools Eyes fixture
  eyes: async ({ page }, use) => {
    const eyes = new Eyes();
    await eyes.open(page, 'Jira Project', test.info().title);
    await use(eyes);
    await eyes.close();
  },

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