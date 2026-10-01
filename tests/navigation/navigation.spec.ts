import { test, expect } from '@playwright/test';

const navigation = [
  { label: 'Overview', path: /\/dev-lab\/?$/, heading: 'Developer workspace' },
  { label: 'Learn', path: /\/dev-lab\/learn\/?$/, heading: 'Learn' },
  { label: 'Playground', path: /\/dev-lab\/playground\/?$/, heading: 'Code Playground' },
  { label: 'Visualizer', path: /\/dev-lab\/visualizer\/?$/, heading: 'Algorithm Visualizer' },
  { label: 'API Lab', path: /\/dev-lab\/api\/?$/, heading: 'API Lab' },
  { label: 'Toolbox', path: /\/dev-lab\/tools\/?$/, heading: 'Developer Toolbox' },
];

test.describe('DevLab navigation', () => {
  for (const item of navigation) {
    test(`navigates to ${item.label}`, async ({ page }) => {
      await page.goto('./');
      await page.getByRole('link', { name: item.label, exact: true }).first().click();
      await expect(page).toHaveURL(item.path);
      await expect(page.getByRole('heading', { name: item.heading, exact: true })).toBeVisible();
    });
  }
});
