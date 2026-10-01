import { test, expect } from '@playwright/test';

test.describe('DevLab API Lab', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./api');
  });

  test('opens API Lab from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'API Lab', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'API Lab', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('shows the request editor', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'HTTP method' }).first()).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Request URL' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Run ▶', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reset', exact: true })).toBeVisible();
  });
});
