import { Page, Locator, expect } from '@playwright/test';

export class AddPeopleModalComponent {
  public readonly addPeopleModalTitle: Locator;
  public readonly allowUsersCheckbox: Locator;
  public readonly emailInput: Locator;
  public readonly addButton: Locator;

  constructor(public readonly page: Page) {
    this.addPeopleModalTitle = this.page.getByRole('heading', { name: 'Add people' });
    this.allowUsersCheckbox = this.page.getByLabel('Site users to invite other people.');
    this.emailInput = this.page.locator('#invite-user-picker');
    this.addButton = this.page.getByRole('button', { name: 'Add 1 person' });

  }

  async expectAddPeopleModalToBeVisible() {
    await expect(this.addPeopleModalTitle).toBeVisible();
  }

  async expectAllowUsersCheckboxToBeVisible() {
    await expect(this.allowUsersCheckbox).toBeVisible();
  }

  async expectAllowUsersCheckboxNotToBeVisible() {
    await expect(this.allowUsersCheckbox).not.toBeVisible();
  }

  async clickAllowUsersCheckbox() {
    await this.allowUsersCheckbox.click();
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async expectAddButtonToBeEnabled() {
    await expect(this.addButton).toBeEnabled();
  }

  async clickEmailSuggestion(email: string) {
    await this.page.getByText(email, { exact: true }).click();
  }
}