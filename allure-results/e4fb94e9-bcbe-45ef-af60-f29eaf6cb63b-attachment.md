# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Portico.spec.js >> Portico HRMS Login Test
- Location: tests\Portico.spec.js:114:1

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /loginportico/
Received string: "https://yourportico.com/loginportico.php?err=UVFtSVc3NWNjRTl1UWVFUmFTZ01TajA0Rk9VLzk3WWJqemdvYkZsTWNnUEY3R3ZqQ242R1NqWWZMbUFscDlUeGZodU1BTW12VGFYem5hUzZpL1Z3eHc9PQ=="
Timeout: 5000ms

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    13 × unexpected value "https://yourportico.com/loginportico.php?err=UVFtSVc3NWNjRTl1UWVFUmFTZ01TajA0Rk9VLzk3WWJqemdvYkZsTWNnUEY3R3ZqQ242R1NqWWZMbUFscDlUeGZodU1BTW12VGFYem5hUzZpL1Z3eHc9PQ=="

```

```yaml
- paragraph:
  - link "Portico":
    - /url: index.php
    - img "Portico"
- text: Incorrect Company ID, User ID or Subscription validity
- textbox "Company ID"
- textbox "User ID"
- textbox "Password"
- link "Show Password":
  - /url: "#"
  - img
- button "Log in to Portico"
- link "Forgot / Change Password?":
  - /url: portico_passassistance.php
- paragraph:
  - text: By logging in, You accept the
  - link "privacy policy":
    - /url: https://topsourceworldwide.com/privacy-policy/
  - text: associated with this application.
- text: Copyright © 2004-2026 TopSource Worldwide, All rights reserved.
- iframe
```

# Test source

```ts
  51  |     // Login Function
  52  | 
  53  |     async login(
  54  |         company,
  55  |         user,
  56  |         password,
  57  |         captchaValue
  58  |     ){
  59  | 
  60  | 
  61  |         // Enter Company ID
  62  | 
  63  |         await this.page.fill(
  64  |             this.companyId,
  65  |             company
  66  |         );
  67  | 
  68  | 
  69  | 
  70  |         // Enter User ID
  71  | 
  72  |         await this.page.fill(
  73  |             this.userId,
  74  |             user
  75  |         );
  76  | 
  77  | 
  78  | 
  79  |         // Enter Password
  80  | 
  81  |         await this.page.fill(
  82  |             this.password,
  83  |             password
  84  |         );
  85  | 
  86  | 
  87  | 
  88  |         // Enter Captcha
  89  | 
  90  |        // await this.page.fill(
  91  |       //      this.captcha,
  92  |        //     captchaValue
  93  |       //  );
  94  | 
  95  | 
  96  | 
  97  |         // Click Login
  98  | 
  99  |         await this.page.click(
  100 |             this.loginButton
  101 |         );
  102 | 
  103 | 
  104 |     }
  105 | 
  106 | 
  107 | }
  108 | 
  109 | 
  110 | 
  111 | // Test Case
  112 | 
  113 | 
  114 | test(
  115 | "Portico HRMS Login Test",
  116 | 
  117 | async ({page})=>{
  118 | 
  119 | 
  120 |     const loginPage =
  121 |     new LoginPage(page);
  122 | 
  123 | 
  124 | 
  125 |     // Open Website
  126 | 
  127 |     await loginPage.open();
  128 | 
  129 | 
  130 | 
  131 |     // Enter Login Details
  132 | 
  133 |     await loginPage.login(
  134 | 
  135 |         "systems plus",
  136 | 
  137 |         "vrushali.kangane",
  138 | 
  139 |         "vrush2728",
  140 | 
  141 |         "1234"
  142 | 
  143 |     );
  144 | 
  145 | 
  146 | 
  147 |     // Validation
  148 | 
  149 |     await expect(page)
  150 |     .not
> 151 |     .toHaveURL(
      |      ^ Error: expect(page).not.toHaveURL(expected) failed
  152 |         /loginportico/
  153 |     );
  154 | 
  155 | 
  156 | 
  157 |     console.log(
  158 |         "Portico HRMS Login Successful"
  159 |     );
  160 | 
  161 | 
  162 | });
```