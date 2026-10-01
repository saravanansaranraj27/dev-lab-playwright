import { test, expect } from '@playwright/test';

test('runs the Base64 tool', async ({ page }) => {
  await page.goto('./tools');

  const tool = page.getByRole('button', { name: 'Developer tool' });
  await tool.click();
  await page.getByRole('option', { name: 'Base64', exact: true }).click();

  await page.getByRole('button', { name: 'Run ▶', exact: true }).click();
  await expect(page.locator('.panel-bar-end')).toContainText('Executed');
  await expect(page.locator('.tool-output')).not.toBeEmpty();
});
