import { test, expect } from '@playwright/test';

test.describe('DevLab Settings', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./settings');
  });

  test('opens Settings from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Settings', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Settings', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('changes the theme to Dark', async ({ page }) => {
    const dark = page.getByRole('button', { name: /^Dark/ });

    await dark.click();
    await expect(dark).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
