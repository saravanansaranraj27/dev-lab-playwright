import { test, expect } from '@playwright/test';

test.describe('DevLab Snippets', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./snippets');
  });

  test('opens Snippets from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Snippets', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Snippets', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('shows reusable snippets', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Search snippets' })).toBeVisible();
    await expect(page.locator('.library-card').first()).toBeVisible();
  });
});
