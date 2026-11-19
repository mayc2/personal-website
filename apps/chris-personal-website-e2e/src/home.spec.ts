import { expect, test } from '@playwright/test';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders name, bio and every section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1, name: 'Chris May' })
    ).toBeVisible();
    for (const name of ['About', 'Work', 'Projects', 'Contact']) {
      await expect(
        page.getByRole('heading', { level: 2, name, exact: true })
      ).toBeAttached();
    }
    await expect(
      page.locator('a[href="https://github.com/mayc2"]').first()
    ).toBeAttached();
    await expect(
      page.locator('a[href^="https://www.linkedin.com/in/chrismhmay"]').first()
    ).toBeAttached();
  });

  test('top bar links jump to sections and open the resume', async ({
    page,
  }) => {
    const nav = page.getByRole('navigation', { name: 'Primary' });
    await nav.getByRole('link', { name: 'Work' }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect(
      page.getByRole('heading', { level: 2, name: 'Work' })
    ).toBeInViewport();
    await expect(nav.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href',
      /\.pdf$/
    );
  });

  test('project links point at real destinations', async ({
    page,
    request,
  }) => {
    const links = page.locator('#projects a[href^="http"]');
    await expect(links.first()).toBeVisible();
    const hrefs = await links.evaluateAll((as) =>
      as.map((a) => (a as unknown as { href: string }).href)
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(5);
    for (const href of hrefs.filter((h) => h.includes('github.com'))) {
      const res = await request.head(href).catch(() => null);
      expect(res?.status(), href).toBeLessThan(400);
    }
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
    await page.goto('/resume');
    await expect(page.locator('object[type="application/pdf"]')).toBeAttached();
    expect(problems).toEqual([]);
  });

  test('text column stays readable', async ({ page }) => {
    const widths = await page
      .locator('main p')
      .evaluateAll((ps) => ps.map((p) => p.getBoundingClientRect().width));
    for (const w of widths) expect(w).toBeLessThanOrEqual(680);
  });
});
