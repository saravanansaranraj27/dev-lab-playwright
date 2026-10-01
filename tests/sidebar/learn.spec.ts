import { test, expect } from '@playwright/test';

test.describe('DevLab Learn', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./learn');
  });

  test('opens Learn from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Learn', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Learn', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('shows the lesson catalog', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Search lessons' })).toBeVisible();
    await expect(page.locator('.lesson-card').first()).toBeVisible();
    await expect(page.locator('.lesson-detail h2')).toBeVisible();
  });
});
