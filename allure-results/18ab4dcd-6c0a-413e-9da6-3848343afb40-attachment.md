# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.js >> Registration Form Automation
- Location: tests\Registration.spec.js:3:5

# Error details

```
Error: page.goto: Could not resolve hostname
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Registration Form Automation', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://demoqa.com/automation-practice-form');
     |              ^ Error: page.goto: Could not resolve hostname
  6  | 
  7  |   await page.fill('#firstName', 'Vrushali');
  8  |   await page.fill('#lastName', 'Kangane');
  9  |   await page.fill('#userEmail', 'vrushali@test.com');
  10 | 
  11 |   await page.click('label[for="gender-radio-2"]');
  12 | 
  13 |   await page.fill('#userNumber', '9876543210');
  14 | 
  15 |   await page.fill('#currentAddress', 'Mumbai');
  16 | 
  17 |   await page.click('#submit');
  18 | 
  19 |   await expect(page.locator('#example-modal-sizes-title-lg'))
  20 |     .toHaveText('Thanks for submitting the form');
  21 | });
```