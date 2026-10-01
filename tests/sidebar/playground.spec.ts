import { test, expect } from '@playwright/test';

test.describe('DevLab Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./playground');
  });

  test('opens Playground from the sidebar', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
    const link = sidebar.getByRole('link', { name: 'Playground', exact: true });

    await expect(link).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Code Playground', exact: true })).toBeVisible();
    await expect(link).toHaveAttribute('aria-current', 'page');
  });

  test('runs JavaScript and displays console output', async ({ page }) => {
    const editor = page.getByRole('textbox', { name: 'JavaScript editor' });

    await editor.fill('console.log("Playwright works");');
    await page.getByRole('button', { name: 'Run ▶', exact: true }).click();

    await expect(page.locator('.devlab-console .output')).toContainText('Playwright works');
    await expect(page.locator('.panel-bar-end')).toContainText('Ran successfully');
  });
});
