import { test, expect } from '@playwright/test';

test('Registration Form Automation', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  await page.fill('#firstName', 'Vrushali');
  await page.fill('#lastName', 'Kangane');
  await page.fill('#userEmail', 'vrushali@test.com');

  await page.click('label[for="gender-radio-1"]');

  
  await page.fill('#userNumber', '9876543210');

  await page.fill('#currentAddress', 'Mumbai');

  await page.click('#submit');

  await expect(page.locator('#example-modal-sizes-title-lg'))
    .toHaveText('Thanks for submitting the form');
});