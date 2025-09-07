import { test } from '../../fixtures/pages.fixture';
import { AddPeopleModalComponent } from '../../components/AddPeopleModalComponent';
import { Target } from '@applitools/eyes-playwright';

test.describe('Role-based permissions on Jira Team page', () => {

  test('Admin user can invite people', async ({ adminPage, homePage, eyes }) => {
    const teamPage = await homePage.navigateToTeams();

    await eyes.check('Teams Page', Target.window());

    await teamPage.clickPeopleTab();
    await teamPage.clickAddPeopleButton();
    const addPeopleModal = new AddPeopleModalComponent(teamPage.page);
    await addPeopleModal.fillEmail('user@example.com');
    await addPeopleModal.clickEmailSuggestion('user@example.com');

    await eyes.check('Modal with Email Filled', Target.window());
    
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