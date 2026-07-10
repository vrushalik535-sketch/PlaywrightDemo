# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Locator.spec.js >> Demonstrate all Playwright locator strategies
- Location: tests\Locator.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Submit' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Submit' })

```

```yaml
- heading "Example Domain" [level=1]
- paragraph: This domain is for use in documentation examples without needing permission. Avoid use in operations.
- paragraph:
  - link "Learn more":
    - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test'); //
  2  |  
  3  | test('Demonstrate all Playwright locator strategies', async ({ page }) => {
  4  | 
  5  |   // Navigate to a mock practice website or your local app
  6  | 
  7  |   await page.goto('https://example.com'); //
  8  |  
  9  |   // 1. Role Locator (Recommended - locates by accessibility attributes)
  10 | 
  11 |   const submitButton = page.getByRole('button', { name: 'Submit' }); //
  12 | 
> 13 |   await expect(submitButton).toBeVisible(); //
     |                              ^ Error: expect(locator).toBeVisible() failed
  14 |  
  15 |   // 2. Text Locator (Locates by exact or partial visible text)
  16 | 
  17 |   const welcomeText = page.getByText('Welcome to our portal', { exact: true }); //
  18 | 
  19 |   await expect(welcomeText).toBeVisible(); //
  20 |  
  21 |   // 3. Label Locator (Locates form controls via their <label> tags)
  22 | 
  23 |   const emailInput = page.getByLabel('Email Address'); //
  24 | 
  25 |   await emailInput.fill('user@example.com'); //
  26 |  
  27 |   // 4. Placeholder Locator (Locates input fields via placeholder text)
  28 | 
  29 |   const passwordInput = page.getByPlaceholder('Enter your password'); //
  30 | 
  31 |   await passwordInput.fill('Secret123!'); //
  32 |  
  33 |   // 5. Alt Text Locator (Locates elements—usually images—via alt attributes)
  34 | 
  35 |   const profileImage = page.getByAltText('User Profile Picture'); //
  36 | 
  37 |   await expect(profileImage).toBeVisible();
  38 |  
  39 |   // 6. Title Locator (Locates elements via the HTML 'title' attribute)
  40 | 
  41 |   const infoIcon = page.getByTitle('More Information'); //
  42 | 
  43 |   await infoIcon.hover(); //
  44 |  
  45 |   // 7. TestID Locator (Locates explicit data-testid attributes for QA)
  46 | 
  47 |   const promoBanner = page.getByTestId('summer-sale-banner'); //
  48 | 
  49 |   await expect(promoBanner).toBeVisible(); //
  50 |  
  51 |   // 8. Generic Locator (For generic CSS or XPath selectors)
  52 | 
  53 |   const cssSelector = page.locator('div.container > ul.menu-list'); //
  54 | 
  55 |   const xpathSelector = page.locator('//input[@id="username"]'); //
  56 | 
  57 |   // 9. Chained & Filtered Locators (Combining locators for precision)
  58 | 
  59 |   const specificRowButton = page
  60 | 
  61 |     .getByRole('listitem') //
  62 | 
  63 |     .filter({ hasText: 'Product Item 3' }) //
  64 | 
  65 |     .getByRole('button', { name: 'Delete' });
  66 | 
  67 |   await specificRowButton.click(); //
  68 | 
  69 | });
  70 |  
```