import { Page, Locator, expect } from '@playwright/test';
import { AddPeopleModalComponent } from '../components/AddPeopleModalComponent';

export class TeamPage {
    public readonly peopleTab: Locator;
    public readonly addPeopleButton: Locator;
    public readonly addPeopleModal: AddPeopleModalComponent;

    constructor(public readonly page: Page) {
        this.peopleTab = this.page.getByRole('link', { name: 'People' });
        this.addPeopleButton = this.page.getByRole('button', { name: 'Add people' });
        this.addPeopleModal = new AddPeopleModalComponent(page);
    }

    async clickPeopleTab() {
        await this.peopleTab.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickAddPeopleButton() {
        await this.addPeopleButton.click();
    }

    async getAddPeopleButton() {
        return this.addPeopleButton;
    }


    async expectAddPeopleButtonToBeHidden() {
        await expect(this.addPeopleButton).not.toBeVisible();
    }
}