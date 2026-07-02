import { test, expect } from '@playwright/test';

test('Basic Playwright test', async ({ page }) => {

  // Open website
  await page.goto('https://www.google.com');

  // Verify page title
  const title = await page.title();
  console.log('Page title is:', title);

  await expect(page).toHaveTitle(/Google/);

  // Search something
  await page.locator('textarea[name="q"]').fill('Playwright Automation');

  // Click search
  await page.keyboard.press('Enter');

  // Wait for results page
  await page.waitForLoadState('networkidle');

  console.log('Search completed');

});