//To access all the configuration elements below, we need to import this playwrightTestConfig 
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices} from '@playwright/test';
import sendEmail from './sendEmail.js';

const name = 'send-email';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  // Here we  need to give the path of the test directory 
  testDir: './tests',

  /* Maximum time one test can run for. */
  timeout: 50 * 10000,
  metadata: {
    env: 'STG',
    type: 'Regression',
    url: 'https://www.npmjs.org/package/monocart-reporter'
},
 
  //Assertion function will wait for 
  expect: {
    
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  //npx playwright test  --workers 5
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  
  reporter:  [
    ['list'],
        ['monocart-reporter', {  
          //If you change this name then it will change the heading of monocart report
            name: "BSIT REPORT",
            outputFile: './test-results/report.html',
            
            onEnd: async (reportData, capability) => {

              await sendEmail(reportData, capability)
            trend: './test-results/report.json'
        }}],





    //allure Configurations 
    ['html',['allure-playwright']],
    ["dot"], // -> console
    ["json", { outputFile: "test-result.json" }], //  -> JSON
    ['html',                   {
        open: "always"
    }],// -> HTML
    
    ['experimental-allure-playwright'],

    //For adding Environment variables
    [
      "allure-playwright", 
      {
    environmentInfo: {
     NODE_VERSION: process.version,
     OS: process.platform, 
     Browser: process.env 
  }
      },
    ],
],
 /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    headless: false,
    trace: 'on',
           channel:'chrome',
          video: 'on',
          screenshot:'on',
         // baseURL:"https://api-mfs-staging.odessainc.com/api/Scenario/CustomerPortalAPI", 
          //extraHTTPHeaders:{
           //"Authorization":"Basic MjcwMTQ3ODg6SmFuQDIwMjM=",
            //'Authorization': `token ${process.env.API_TOKEN}`,
          
          //},
          // it is used to slow down the actions performed by Playwright during test execution. 
          launchOptions: {
            slowMo : 500
            
          }
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    // actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
   /* {
      name: 'Mobile Chromium',
      use: {
        ...devices['motorola edge 30'],
      },
    },*/
   /* {
      name: 'firefox',
       use: {
         ...devices['Desktop Firefox'],
      },
     },

   {
       name: 'webkit',
       use: {
         ...devices['Desktop Safari'],
       },
     },

    /* Test against mobile viewports. */
   /* {
       name: 'Mobile Chrome',
      use: {
         ...devices['Pixel 5'],
      },
    },
     {
       name: 'Mobile Safari',
     use: {
         ...devices['iPhone 12'],
       },
     },*/

    // Test against branded browsers. */
    // {
      //name: 'Microsoft Edge',
     //use: {
       //channel: 'msedge',
   // },
     //},
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
  
};

export default config;

