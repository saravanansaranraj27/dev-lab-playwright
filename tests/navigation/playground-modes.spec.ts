import { test, expect } from '@playwright/test';

test('switches Playground from JavaScript to TypeScript', async ({ page }) => {
  await page.goto('./playground');

  const language = page.getByRole('button', { name: 'Playground language' });
  await language.click();
  await page.getByRole('option', { name: 'TypeScript', exact: true }).click();

  await expect(language).toHaveText('TypeScript');
  await expect(page.getByRole('textbox', { name: 'TypeScript editor' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Run ▶', exact: true })).toBeVisible();
});
