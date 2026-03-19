import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5002/',
    reuseExistingServer: true, //if aserver is already running then use the existing one instead of starting a new one
  },
  use: {
    baseURL: 'http://localhost:5002/',
    headless: false,
  },
});
