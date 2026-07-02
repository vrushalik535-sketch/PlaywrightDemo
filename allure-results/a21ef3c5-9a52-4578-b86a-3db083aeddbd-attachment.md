# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Portico.spec.js >> Portico HRMS Login Test
- Location: tests\Portico.spec.js:129:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /HomeNew\.aspx/
Received string:  "https://systemplus.topsource.in/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://systemplus.topsource.in/"

```

```yaml
- table:
  - rowgroup:
    - 'row "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0"':
      - 'cell "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0"':
        - img
        - text: Systems Plus Private Limited Welcome to Portico Employee Self Service
        - button "Sign in"
        - iframe
        - text: "version: 5.41.3.0"
```

# Test source

```ts
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
  131 | 
  132 | async ({page})=>{
  133 | 
  134 | 
  135 |     const loginPage =
  136 |     new LoginPage(page);
  137 | 
  138 | 
  139 | 
  140 |     // Open application
  141 | 
  142 |     await loginPage.open();
  143 | 
  144 | 
  145 | 
  146 |     // Login
  147 | 
  148 |     await loginPage.login(
  149 | 
  150 |         "vrushali.kangane",
  151 | 
  152 |         "vrush2728"
  153 | 
  154 |     );
  155 | 
  156 | 
  157 | 
  158 |     // Verify Home Page
  159 | 
  160 |     await expect(page)
> 161 |     .toHaveURL(
      |      ^ Error: expect(page).toHaveURL(expected) failed
  162 |         /HomeNew\.aspx/
  163 |     );
  164 | 
  165 | 
  166 | 
  167 |     await expect(
  168 |         page.getByText("Payroll")
  169 |     )
  170 |     .toBeVisible();
  171 | 
  172 | 
  173 | 
  174 |     console.log(
  175 |         "Portico HRMS Login successful"
  176 |     );
  177 | 
  178 | 
  179 | });
```