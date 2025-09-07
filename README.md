# 🎯 Jira Role-Based Access Testing

This project is an end-to-end automation framework for testing role-based access control in Jira using Playwright with TypeScript. It verifies different user permissions and access levels within the Jira platform.

## 🎭 Test Scenarios

### 👑 Admin User Tests
- ✅ Admin user can access the team management section
- ✅ Admin user can see the "Add People" option
- ✅ Admin user can successfully invite new members to the team
- ✅ Admin user can manage user roles and permissions

### 👤 Member User Tests
- ✅ Member user can access basic Jira features
- ✅ Member user can see the "Add People" option
- ❌ Member user cannot invite new members

## 🏗️ Architecture

The framework follows a component-based architecture where UI elements and their associated actions are organized into reusable components. This approach:
- ♻️ Promotes code reusability
- 🎯 Reduces code duplication
- 🔍 Makes test maintenance easier
- 📦 Provides better encapsulation

## 🛠️ Tech Stack

- 🎭 Playwright - For reliable end-to-end testing
- 👁️ Applitools - For visual testing and UI validation
- 🔷 TypeScript - For type-safe code
- 🎯 ESLint - Code quality and consistency
- 🔐 Fixtures - For managing test users and roles
- 📦 Page Object Model - For maintainable test structure

## 🚀 Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/dangi13/jira-role-based-automation.git
cd jira-role-based-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Create environment file (MANDATORY):
   Create a `.env` file in the root directory. This file is **required** to run tests locally.
   
   ⚠️ **IMPORTANT**: 
   - This file contains sensitive credentials
   - Never commit this file (it's already in `.gitignore`)
   - Double-check it's not included in your commits before pushing

```bash
# Jira Credentials
ADMIN_USER=your_admin_email@example.com
ADMIN_PASS=your_admin_password
MEMBER_USER=your_member_email@example.com
MEMBER_PASS=your_member_password

# Applitools Configuration
APPLITOOLS_API_KEY=your_applitools_api_key
```

## 🏃‍♂️ Running Tests

```bash
npm test                     # Run all tests
```

### Specific Test Run
```bash
npx playwright test tests/ui-tests/roles.test.ts        # Run role-based access tests
```

## 📁 Project Structure

```
├── components/           # Reusable UI Components (e.g., AddPeopleModal)
├── fixtures/            # Test data and authentication fixtures
├── pages/               # Page Objects (Login, Home, Team pages)
├── tests/               # Test files
│   └── ui-tests/        # UI test specifications
├── playwright-report/   # Test execution reports
└── test-results/       # Test execution artifacts
```

## 🔧 Configuration

### Playwright Configuration (playwright.config.ts)
- Base URL: https://nicolas1.atlassian.net/
- Parallel execution enabled
- Video recording on
- Screenshot on failure
- HTML reporter configured

### Environment Variables
- `ADMIN_USER`: Admin user credentials
- `MEMBER_USER`: Member user credentials
- `BUILD_NUMBER`: CI environment detection
- `HEADLESS`: Run tests in headless mode (default: true in CI)

## 📊 Test Reports

- HTML reports are generated after test execution
- Reports can be found in `playwright-report/` directory
- Videos are captured for all tests
- Screenshots are captured on test failures
- Test artifacts are stored in `test-results/`
- Visual test results available in Applitools dashboard
  - UI comparisons and visual diffs
  - Visual testing history and baselines

## 📝 Adding New Tests

1. **Create Page Objects**
   - Add new page classes in `pages/` directory
   - Define page-specific locators and actions
   - Example: `loginPage.ts`, `teamPage.ts`

2. **Create Components**
   - Add reusable UI components in `components/` directory
   - Example: `AddPeopleModalComponent.ts` for team member invitation

3. **Setup Test Data**
   - Add test data in `fixtures/` directory
   - Example: `auth.fixture.ts` for user credentials
   - Example: `pages.fixture.ts` for page-specific test data

4. **Write Test Cases**
   - Add test files in `tests/ui-tests/` directory
   - Follow existing pattern in `roles.test.ts`
   - Group related test cases using `test.describe`
   - Use fixtures for authentication and data setup

Example test structure:
```typescript
test.describe('Role-based access tests', () => {
  test('Admin user can invite people', async ({ pages, auth }) => {
    // Test implementation
  });
  
  test('Member user cannot invite people', async ({ pages, auth }) => {
    // Test implementation
  });
});
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests locally
4. Submit a pull request