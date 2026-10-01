import { test, expect } from '@playwright/test';

test('opens Overview from the sidebar', async ({ page }) => {
  await page.goto('./');

  const sidebar = page.getByRole('complementary', { name: 'Primary navigation' });
  const link = sidebar.getByRole('link', { name: 'Overview', exact: true });

  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/\/dev-lab\/?$/);
  await expect(
    page.getByRole('heading', { name: 'Developer workspace', exact: true }),
  ).toBeVisible();
  await expect(link).toHaveAttribute('aria-current', 'page');
});
