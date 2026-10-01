import { test, expect } from '@playwright/test';

test.describe('DevLab Algorithm Visualizer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./visualizer');
  });

  test('opens Visualizer from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Visualizer', exact: true });

    await expect(link).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Algorithm Visualizer', exact: true }),
    ).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('advances to the next algorithm step', async ({ page }) => {
    await expect(page.getByText(/STEP 1 \/ \d+/)).toBeVisible();
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await expect(page.getByText(/STEP 2 \/ \d+/)).toBeVisible();
  });
});
