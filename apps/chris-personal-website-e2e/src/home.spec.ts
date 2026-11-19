import { expect, test } from '@playwright/test';

const SECTIONS = [
  'A little about myself...',
  'Personal Projects',
  'Experience',
  'Skills',
  'Wanna Say Hey?',
];

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows the welcome popup and dismisses it', async ({ page }) => {
    const enter = page.getByRole('button', { name: 'Enter Site!' });
    await expect(enter).toBeVisible();
    await enter.click();
    await expect(enter).toBeHidden();
  });

  test('renders every section and the contact links', async ({ page }) => {
    await page.getByRole('button', { name: 'Enter Site!' }).click();
    await expect(
      page.getByRole('heading', { name: 'Chris May' })
    ).toBeVisible();
    for (const name of SECTIONS) {
      await expect(page.getByRole('heading', { name, exact: true })).toBeAttached();
    }
    await expect(
      page.locator('a[href="https://github.com/mayc2"]').first()
    ).toBeAttached();
    await expect(
      page.locator('a[href^="https://www.linkedin.com/in/chrismhmay"]').first()
    ).toBeAttached();
  });

  test('has no console errors or failed requests', async ({ page }) => {
    const problems: string[] = [];
    page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
    page.on(
      'console',
      (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`)
    );
    page.on(
      'response',
      (r) => r.status() >= 400 && problems.push(`${r.status()} ${r.url()}`)
    );
    await page.goto('/');
    await page.getByRole('button', { name: 'Enter Site!' }).click();
    await page.goto('/resume');
    await expect(page.locator('object[type="application/pdf"]')).toBeAttached();
    expect(problems).toEqual([]);
  });
});

test.describe('desktop navigation', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop nav bar is hidden on mobile');

  test('navigates to the resume page and back', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Enter Site!' }).click();
    await page.getByRole('banner').getByRole('link', { name: 'Resume' })
      .click();
    await expect(page).toHaveURL(/\/resume$/);
    await expect(page.getByText("Chris May's Resume")).toBeVisible();
    await page.getByRole('link', { name: /Return To Home/ }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole('heading', { name: 'Chris May' })
    ).toBeVisible();
  });
});

test.describe('mobile menu', () => {
  test.skip(({ isMobile }) => !isMobile, 'mobile viewport only');

  test('opens from the hamburger and closes', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Enter Site!' }).click();
    await page.getByRole('button', { name: 'Open menu' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Resume' })).toBeVisible();
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();
  });
});
