import { test, expect } from '@playwright/test';

test('filters Learn results with a positive search match', async ({ page }) => {
  await page.goto('./learn');

  const search = page.getByRole('textbox', { name: 'Search lessons' });
  await search.fill('array');

  await expect(page.locator('.lesson-card').first()).toBeVisible();
  await expect(page.locator('.lesson-card')).not.toHaveCount(0);
  await expect(page.locator('.lesson-detail h2')).toContainText(/array/i);
});
