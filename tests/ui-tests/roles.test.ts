import { test } from '../../fixtures/pages.fixture';
import { AddPeopleModalComponent } from '../../components/AddPeopleModalComponent';

test.describe('Role-based permissions on Jira Team page', () => {

  test('Admin user can invite people', async ({ adminPage, homePage }) => {
    const teamPage = await homePage.navigateToTeams();
    await teamPage.clickPeopleTab();
    await teamPage.clickAddPeopleButton();
    const addPeopleModal = new AddPeopleModalComponent(teamPage.page);
    await addPeopleModal.fillEmail('user@example.com');
    await addPeopleModal.clickEmailSuggestion('user@example.com');
    await addPeopleModal.expectAllowUsersCheckboxToBeVisible();
  });

  test('Member user cannot invite people', async ({ memberPage, homePage }) => {
    const teamPage = await homePage.navigateToTeams();
    await teamPage.clickPeopleTab();
    await teamPage.clickAddPeopleButton();
    const addPeopleModal = new AddPeopleModalComponent(teamPage.page);
    await addPeopleModal.fillEmail('user@example.com');
    await addPeopleModal.clickEmailSuggestion('user@example.com');
    await addPeopleModal.expectAddButtonToBeEnabled();
    await addPeopleModal.expectAllowUsersCheckboxNotToBeVisible();
  });

  // we can configure this same test to run with different permissions as well, having different conditions written in some json file and doing validation in same test with different user set
  // but for now keeping it simple with two tests
});