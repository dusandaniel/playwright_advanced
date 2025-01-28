// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30*1000,   //30 sekund
  expect: {   //vlastnost expect
    timeout: 5000   //kolko test bude cakat na moje asercie
  },
  /* Run tests in files in parallel */
  fullyParallel: true,  //testy budu bezat paralerne
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,   //opakuj test 2x, inak neopakuj vobec
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'], 
   // ['list'],//['json', {outputFile: 'test-results.json'}]
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'http://google.com',//'http://127.0.0.1:3000',
     screenshot: 'only-on-failure',
     //video: 'on',
     video : {
      mode: 'on' //off  
      //'retain-on-failure'  -- len test, ktory padol
    }, 

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', //'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
/*
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
/*
     {
      name: 'iPhone',
       use: { ...devices['iPhone 13 Pro Max'] },
     },
*/
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  //outputDir: 'test-result/',   //kam sa budu ukladat vysledky testov, ale aj printscreeny a pod

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

