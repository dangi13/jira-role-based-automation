import { Page, Locator } from '@playwright/test';
import { TeamPage } from './teamPage';

export class HomePage {
  public readonly teamButton: Locator;

  constructor(public readonly page: Page) {
    this.teamButton = this.page.getByRole('link', { name: 'Teams , (opens new window)' });
  }

  async navigateToTeams(): Promise<TeamPage> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.teamButton.click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    return new TeamPage(newPage);
  }
}