# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Flexplm.spec.js >> FlexPLM SSO Login
- Location: tests\Flexplm.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('USERNAME')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]: Sign On
  - generic [ref=e5]:
    - generic [ref=e6]: Username
    - textbox [ref=e8]
    - generic "Next" [ref=e10] [cursor=pointer]
  - generic [ref=e14]: © Copyright 2024 Ping Identity. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('FlexPLM SSO Login', async ({ page }) => {
  4  | 
  5  |     // Open FlexPLM
  6  |     await page.goto('https://nb-sandbox.ptcmscloud.com/Windchill/rfa/jsp/main/Main.jsp',{ waitUntil: 'domcontentloaded' });
  7  |     
  8  |     // Wait for Ping Identity page
  9  |     await page.waitForLoadState('networkidle');
  10 | 
  11 |     //click on locator where user name is needs to be entered
> 12 |     await page.getByLabel('USERNAME').fill('vrushali.kangane');
     |                                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 | 
  14 |     // Click the saved account
  15 |     await page.getByText('vrushali.kangane').click();
  16 | 
  17 |     // Wait for FlexPLM Home page
  18 |     await page.waitForLoadState('networkidle');
  19 | 
  20 |     // Verify URL
  21 |     await expect(page).toHaveURL(/Windchill/);
  22 | 
  23 |     // Verify Home page loaded
  24 |     await expect(page.getByText('Notices')).toBeVisible();
  25 |     await expect(page.getByText('Season Dashboard')).toBeVisible();
  26 |     await expect(page.getByText('Product Sample Dashboard')).toBeVisible();
  27 | 
  28 |     console.log('Successfully logged into FlexPLM');
  29 | });
```