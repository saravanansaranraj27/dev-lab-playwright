import { test, expect } from '@playwright/test';

test.describe('DevLab Toolbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./tools');
  });

  test('opens Toolbox from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Toolbox', exact: true });

    await expect(link).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Developer Toolbox', exact: true }),
    ).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('runs the default toolbox input', async ({ page }) => {
    await page.getByRole('button', { name: 'Run ▶', exact: true }).click();
    await expect(page.locator('.panel-bar-end')).toContainText('Executed');
    await expect(page.locator('.tool-output')).toContainText('DevLab');
  });
});
