import { defineConfig, devices } from '@playwright/test';
<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config({
  path: `./env/.env.${process.env.ENV}`  
});
=======
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
<<<<<<< HEAD
// require('dotenv').config();
=======
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
<<<<<<< HEAD
  //globalSetup: require.resolve('./global-setup.ts'),
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000
  },
=======
  testDir: './tests',
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
<<<<<<< HEAD
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //storageState: 'loginAuth.json',
    baseURL: 'https://www.saucedemo.com/',
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: {
      mode: 'on-first-retry',
      size: { width: 640, height: 480 }
    }
=======
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285
  },

  /* Configure projects for major browsers */
  projects: [
<<<<<<< HEAD
    //{name: "setup", testMatch: /.*\.setup\.ts/, fullyParallel: false},
    {
      name: 'chromium',
     // dependencies: ["setup"],
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
=======
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
<<<<<<< HEAD
    //   name: 'iPhone',
    //   use: { ...devices['iPhone 13 Pro Max landscape'] },
=======
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
<<<<<<< HEAD
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
=======
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
>>>>>>> df3d7b9584789eaab5fa4b9f3a59c0152d079285
  // },
});
