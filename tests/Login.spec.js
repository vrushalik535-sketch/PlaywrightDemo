  import { test, expect } from '@playwright/test';
  import nodemailer from 'nodemailer';
  import fs from 'fs';

  // Email Function
  async function sendReport() {
    // Get credentials from environment variables
    const smtpUser = (process.env.SMTP_USER || '').trim();
    const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
    const mailTo =
      process.env.MAIL_TO || 'vrushali.kangane@systems-plus.com';

    // Validate credentials
    
    if (!smtpUser || !smtpPass) {
      throw new Error('Missing SMTP_USER or SMTP_PASS.');
    }

    // Configure Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.in',
      port: 465,
      secure: true,
      //service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Read Playwright HTML Report
    const reportHtml = fs.readFileSync(
      './playwright-report/index.html',
      'utf8'
    );

    // Send Email
    return transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: 'Playwright Login Test Report',
      html: reportHtml,
      attachments: [
        {
          filename: 'PlaywrightReport.html',
          path: './playwright-report/index.html'
        }
      ]
    });
  }

  test.describe('Login Functionality', () => {

    test('Positive Login Test', async ({ page }) => {

      // Open application
      await page.goto('https://practicetestautomation.com/practice-test-login/');

      // Enter username
      await page.fill('#username', 'student');

      // Enter password
      await page.fill('#password', 'Password123');

      // Click submit
      await page.click('#submit');

      // Verify URL
      await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
      );

      // Verify Heading
      await expect(page.locator('h1'))
        .toHaveText('Logged In Successfully');

    });

    test('Negative Login Test - Invalid Password', async ({ page }) => {

      await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
      );

  // Take screenshot before entering credentials
  await page.screenshot({
      path: 'before-login.png',
      fullPage: true
  });
      console.log('Screenshot captured');

      await page.fill('#username', 'student');

      await page.fill('#password', 'WrongPassword');

      await page.click('#submit');

      const errorMessage = page.locator('#error');

      await expect(errorMessage).toBeVisible();

      await expect(errorMessage)
        .toHaveText('Your password is invalid!');

    });

  });

  // Send report once after all tests complete
  test.afterAll(async () => {
    try {
      const info = await sendReport();
      console.log(
        `Mail sent: ${info.response || info.messageId || 'Success'}`
      );
    } catch (error) {
      console.error('Mail sending failed:', error.message);
    }
  });