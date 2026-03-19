import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
    timeout: 30000,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5002/',
    reuseExistingServer: true, //if aserver is already running then use the existing one instead of starting a new one
     timeout: 120000
  },
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:5002/',
    headless: true,
    trace: 'on-first-retry',
  },
});

