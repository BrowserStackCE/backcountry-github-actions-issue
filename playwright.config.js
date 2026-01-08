// This is a sample config for what users might be running locally
const config = {
  testDir: './tests',
  testMatch: '**/bstack_local_test*.js',

  /* Maximum time one test can run for. */
  timeout: 2 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* tests in parallel */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',
  retries: process.env.CI ? 1 : 0,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        //screenshot: { mode: 'on', fullPage: true }
      },
    },
  ],
};

module.exports = config;
