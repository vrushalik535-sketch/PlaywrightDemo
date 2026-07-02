# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Portico.spec.js >> Portico HRMS Login Test
- Location: tests\Portico.spec.js:135:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[placeholder="Username"]')

```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - 'row "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0" [ref=e4]':
      - 'cell "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0" [ref=e5]':
        - generic [ref=e7]:
          - img [ref=e10]
          - generic [ref=e11]:
            - generic [ref=e13]:
              - generic [ref=e14]: Systems Plus Private Limited
              - generic [ref=e15]: Welcome to
              - generic [ref=e16]: Portico Employee Self Service
            - button "Sign in" [ref=e19] [cursor=pointer]
            - generic [ref=e20]:
              - iframe [ref=e21]:
                - generic [active] [ref=f1e1]: Copyright © 2026 All Rights Reserved.
              - generic [ref=e22]: "version: 5.41.3.0"
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | 
  4   | 
  5   | // Login Page Class
  6   | 
  7   | class LoginPage {
  8   | 
  9   | 
  10  |     constructor(page){
  11  | 
  12  | 
  13  |         this.page = page;
  14  | 
  15  | 
  16  |         // First screen
  17  | 
  18  |         this.signInButton =
  19  |         "text=Sign in";
  20  | 
  21  | 
  22  | 
  23  |         // Username screen
  24  | 
  25  |         this.username =
  26  |         'input[placeholder="Username"]';
  27  | 
  28  | 
  29  |         this.nextButton =
  30  |         "text=Next";
  31  | 
  32  | 
  33  | 
  34  |         // Password screen
  35  | 
  36  |         this.password =
  37  |         'input[type="password"]';
  38  | 
  39  | 
  40  |     }
  41  | 
  42  | 
  43  | 
  44  | 
  45  |     async open(){
  46  | 
  47  | 
  48  |         await this.page.goto(
  49  | 
  50  |             "https://systemplus.topsource.in/"
  51  | 
  52  |         );
  53  | 
  54  | 
  55  |     }
  56  | 
  57  | 
  58  | 
  59  | 
  60  |     async login(username,password){
  61  | 
  62  | 
  63  | 
  64  |         // Click Sign in
  65  | 
  66  |         await this.page.click(
  67  | 
  68  |             this.signInButton
  69  | 
  70  |         );
  71  | 
  72  | 
  73  | 
  74  |         // Enter username
  75  | 
> 76  |         await this.page.fill(
      |                         ^ Error: page.fill: Test timeout of 30000ms exceeded.
  77  | 
  78  |             this.username,
  79  | 
  80  |             username
  81  | 
  82  |         );
  83  | 
  84  | 
  85  | 
  86  |         // Click Next
  87  | 
  88  |         await this.page.click(
  89  | 
  90  |             this.nextButton
  91  | 
  92  |         );
  93  | 
  94  | 
  95  | 
  96  |         // Wait for password screen
  97  | 
  98  |         await this.page.waitForTimeout(2000);
  99  | 
  100 | 
  101 | 
  102 |         // Enter password
  103 | 
  104 |         await this.page.fill(
  105 | 
  106 |             this.password,
  107 | 
  108 |             password
  109 | 
  110 |         );
  111 | 
  112 | 
  113 | 
  114 |         // Click Next
  115 | 
  116 |         await this.page.click(
  117 | 
  118 |             this.nextButton
  119 | 
  120 |         );
  121 | 
  122 | 
  123 | 
  124 |     }
  125 | 
  126 | 
  127 | }
  128 | 
  129 | 
  130 | 
  131 | 
  132 | // Test Case
  133 | 
  134 | 
  135 | test(
  136 | 
  137 | "Portico HRMS Login Test",
  138 | 
  139 | async ({page})=>{
  140 | 
  141 | 
  142 | 
  143 |     const loginPage =
  144 | 
  145 |     new LoginPage(page);
  146 | 
  147 | 
  148 | 
  149 | 
  150 |     // Open application
  151 | 
  152 |     await loginPage.open();
  153 | 
  154 | 
  155 | 
  156 | 
  157 |     // Login
  158 | 
  159 |     await loginPage.login(
  160 | 
  161 |         "vrushali.kangane",
  162 | 
  163 |         "vrush2728"
  164 | 
  165 |     );
  166 | 
  167 | 
  168 | 
  169 | 
  170 |     // Validation
  171 | 
  172 |     await expect(page)
  173 | 
  174 |     .not
  175 | 
  176 |     .toHaveURL(
```