const { test, expect } = require('@playwright/test');

test('Practice Test Automation - Login Test', async ({ page }) => {

    // Open login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');


    // Enter username
    await page.fill('#username', 'student');


    // Enter password
    await page.fill('#password', 'Password123');


    // Click Submit button
    await page.click('#submit');


    // Verify URL after successful login
    await expect(page).toHaveURL(
        /logged-in-successfully/
    );


    // Verify success message
     const successMessage = page.locator(
        'text=Logged In Successfully'
    );

    await expect(successMessage).toContainText(
        'Logged In Successfully'
    );


    console.log("Login successful");

});