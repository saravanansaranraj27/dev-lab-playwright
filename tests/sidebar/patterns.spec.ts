import { test, expect } from '@playwright/test';

test.describe('DevLab Patterns', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./patterns');
  });

  test('opens Patterns from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Patterns', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Patterns', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('shows reusable problem-solving patterns', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Search patterns' })).toBeVisible();
    await expect(page.locator('.pattern-card').first()).toBeVisible();
  });
});
