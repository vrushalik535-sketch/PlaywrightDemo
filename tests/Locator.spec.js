const { test, expect } = require('@playwright/test'); //
 
test('Demonstrate all Playwright locator strategies', async ({ page }) => {

  // Navigate to a mock practice website or your local app

  await page.goto('https://example.com'); //
 
  // 1. Role Locator (Recommended - locates by accessibility attributes)

  const submitButton = page.getByRole('button', { name: 'Submit' }); //

  await expect(submitButton).toBeVisible(); //
 
  // 2. Text Locator (Locates by exact or partial visible text)

  const welcomeText = page.getByText('Welcome to our portal', { exact: true }); //

  await expect(welcomeText).toBeVisible(); //
 
  // 3. Label Locator (Locates form controls via their <label> tags)

  const emailInput = page.getByLabel('Email Address'); //

  await emailInput.fill('user@example.com'); //
 
  // 4. Placeholder Locator (Locates input fields via placeholder text)

  const passwordInput = page.getByPlaceholder('Enter your password'); //

  await passwordInput.fill('Secret123!'); //
 
  // 5. Alt Text Locator (Locates elements—usually images—via alt attributes)

  const profileImage = page.getByAltText('User Profile Picture'); //

  await expect(profileImage).toBeVisible();
 
  // 6. Title Locator (Locates elements via the HTML 'title' attribute)

  const infoIcon = page.getByTitle('More Information'); //

  await infoIcon.hover(); //
 
  // 7. TestID Locator (Locates explicit data-testid attributes for QA)

  const promoBanner = page.getByTestId('summer-sale-banner'); //

  await expect(promoBanner).toBeVisible(); //
 
  // 8. Generic Locator (For generic CSS or XPath selectors)

  const cssSelector = page.locator('div.container > ul.menu-list'); //

  const xpathSelector = page.locator('//input[@id="username"]'); //

  // 9. Chained & Filtered Locators (Combining locators for precision)

  const specificRowButton = page

    .getByRole('listitem') //

    .filter({ hasText: 'Product Item 3' }) //

    .getByRole('button', { name: 'Delete' });

  await specificRowButton.click(); //

});
 