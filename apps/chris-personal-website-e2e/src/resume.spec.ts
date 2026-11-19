import { expect, test } from '@playwright/test';

test('resume page embeds the PDF and offers a fallback link', async ({
  page,
  request,
}) => {
  await page.goto('/resume');
  const pdf = page.locator('object[type="application/pdf"]');
  await expect(pdf).toHaveAttribute('data', /\.pdf$/);
  const pdfSrc = await pdf.getAttribute('data');
  const res = await request.get(pdfSrc as string);
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('pdf');
  await expect(page.getByRole('link', { name: 'Click here.' })).toHaveAttribute(
    'target',
    '_blank'
  );
});
