import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

// Point BASE_URL at a deployed site (e.g. a Firebase preview channel) to run the suite against it.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4300';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: { baseURL, trace: 'on-first-retry' },
  webServer: process.env['BASE_URL']
    ? undefined
    : {
        command: 'npx nx run chris-personal-website:preview',
        url: 'http://localhost:4300',
        reuseExistingServer: !process.env['CI'],
        cwd: workspaceRoot,
        timeout: 120_000,
      },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
  ],
});
