import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const isCI = !!process.env.BUILD_NUMBER;
console.log(`Running in CI: ${isCI}`);
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  reporter: [
    ['html', {
      // If running on CI, never open the report.
      // Otherwise, open it only if a test fails.
      open: isCI ? 'never' : 'always'
    }]
  ],
  timeout: 60000,
// Shared Settings for all projects
  use: {
    baseURL: 'https://nicolas1.atlassian.net/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',
    headless: isCI,
  },

 projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});