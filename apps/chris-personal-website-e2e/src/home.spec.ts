import { expect, test } from '@playwright/test';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders headline, photo and every section', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Chris'
    );
    await expect(page.getByRole('img', { name: /Chris May/ })).toBeVisible();
    for (const name of [
      'About',
      'Work',
      'Selected projects',
      'Writing',
      'Wanna say hey?',
    ]) {
      await expect(
        page.getByRole('heading', { level: 2, name, exact: true })
      ).toBeAttached();
    }
    await expect(
      page.locator('a[href="https://github.com/mayc2"]').first()
    ).toBeAttached();
  });

  test('top bar links jump to sections and open the resume', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'section links collapse on mobile');
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
    await expect(links.first()).toBeAttached();
    const hrefs = await links.evaluateAll((as) =>
      as.map((a) => (a as unknown as { href: string }).href)
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(5);
    for (const href of hrefs.filter((h) => h.includes('github.com'))) {
      const res = await request.head(href).catch(() => null);
      expect(res?.status(), href).toBeLessThan(400);
    }
  });

  test('writing list opens a post', async ({ page }) => {
    await page.getByRole('link', { name: 'Hello again' }).click();
    await expect(page).toHaveURL(/\/writing\/hello-again$/);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Hello again' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'All writing' }).click();
    await expect(page).toHaveURL(/\/writing$/);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Writing' })
    ).toBeVisible();
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
    await page.goto('/writing/hello-again');
    await page.goto('/resume');
    await expect(page.locator('object[type="application/pdf"]')).toBeAttached();
    expect(problems).toEqual([]);
  });

  test('running text stays readable', async ({ page }) => {
    const widths = await page
      .locator('main p')
      .evaluateAll((ps) => ps.map((p) => p.getBoundingClientRect().width));
    for (const w of widths) expect(w).toBeLessThanOrEqual(740);
  });
});
