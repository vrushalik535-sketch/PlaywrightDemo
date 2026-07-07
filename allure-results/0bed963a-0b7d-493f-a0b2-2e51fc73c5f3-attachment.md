# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.js >> Registration Form Automation
- Location: tests\Registration.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoqa.com/automation-practice-form
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Registration Form Automation', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://demoqa.com/automation-practice-form');
     |              ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoqa.com/automation-practice-form
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