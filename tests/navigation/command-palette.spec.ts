import { test, expect } from '@playwright/test';

test('opens the command palette and shows workspace commands', async ({ page }) => {
  await page.goto('./');

  await page.getByRole('button', { name: 'Open command palette' }).click();

  const dialog = page.getByRole('dialog', { name: 'Command palette' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('textbox', { name: 'Search workspace' })).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Learn/ })).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Playground/ })).toBeVisible();
});
