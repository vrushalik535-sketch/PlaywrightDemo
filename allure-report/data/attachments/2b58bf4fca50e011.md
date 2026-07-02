# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Portico.spec.js >> Portico HRMS Login Test
- Location: tests\Portico.spec.js:129:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'context')
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
            - button "Sign in" [active] [ref=e19] [cursor=pointer]
            - generic [ref=e20]:
              - iframe [ref=e21]:
                - generic [active] [ref=f1e1]: Copyright © 2026 All Rights Reserved.
              - generic [ref=e22]: "version: 5.41.3.0"
```

# Test source

```ts
  54  | 
  55  | 
  56  |     await this.page
  57  |     .getByText("Sign in")
  58  |     .waitFor();
  59  | 
  60  | }
  61  | 
  62  | 
  63  | 
  64  |     async login(username,password){
  65  | 
  66  | 
  67  |     // Click Sign in and wait for new page
  68  | 
  69  |     const newPagePromise = 
  70  |     this.page.waitForEvent('popup');
  71  | 
  72  | 
  73  |     await this.page.click(
  74  |         this.signInButton
  75  |     );
  76  | 
  77  | 
  78  |     const loginPage = 
  79  |     await newPagePromise;
  80  | 
  81  | 
  82  | 
  83  |     // Enter username
  84  | 
  85  |     await loginPage.fill(
  86  |         'input[placeholder="Username"]',
  87  |         username
  88  |     );
  89  | 
  90  | 
  91  | 
  92  |     // Click Next
  93  | 
  94  |     await loginPage.getByText("Next").click();
  95  | 
  96  | 
  97  | 
  98  |     // Wait for password field
  99  | 
  100 |     await loginPage.waitForTimeout(2000);
  101 | 
  102 | 
  103 | 
  104 |     // Enter password
  105 | 
  106 |     await loginPage.fill(
  107 |         'input[type="password"]',
  108 |         password
  109 |     );
  110 | 
  111 | 
  112 | 
  113 |     // Click Next
  114 | 
  115 |     await loginPage.getByText("Next").click();
  116 | 
  117 | 
  118 | }
  119 | 
  120 | 
  121 | }
  122 | 
  123 | 
  124 | 
  125 | 
  126 | // Test Case
  127 | 
  128 | 
  129 | test(
  130 | "Portico HRMS Login Test",
  131 | async ({page})=>{
  132 | 
  133 | 
  134 | const loginPage =
  135 | new LoginPage(page);
  136 | 
  137 | 
  138 | 
  139 | await loginPage.open();
  140 | 
  141 | 
  142 | 
  143 | const homePage =
  144 | await loginPage.login(
  145 | "vrushali.kangane",
  146 | "vrush2728"
  147 | );
  148 | 
  149 | 
  150 | 
  151 | // URL validation
  152 | 
  153 | await expect(homePage)
> 154 | .toHaveURL(
      |  ^ TypeError: Cannot read properties of undefined (reading 'context')
  155 | /HomeNew\.aspx/
  156 | );
  157 | 
  158 | 
  159 | 
  160 | // Home page validation
  161 | 
  162 | await expect(
  163 | homePage.getByText("Payroll")
  164 | )
  165 | .toBeVisible();
  166 | 
  167 | 
  168 | 
  169 | console.log(
  170 | "Portico HRMS Login successful"
  171 | );
  172 | 
  173 | 
  174 | });
```