# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce.spec.js >> Ecommerce Add Product Test
- Location: tests\ecommerce.spec.js:116:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#password')

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | 
  4   | // Login Page Class
  5   | 
  6   | class LoginPage {
  7   | 
  8   | 
  9   |     constructor(page){
  10  | 
  11  |         this.page = page;
  12  | 
  13  |         this.username = "#user-name";
  14  | 
  15  |         this.password = "#password";
  16  | 
  17  |         this.loginButton = "#login-button";
  18  | 
  19  |     }
  20  | 
  21  | 
  22  | 
  23  |     async open(){
  24  | 
  25  |         await this.page.goto(
  26  |             "https://www.saucedemo.com/"
  27  |         );
  28  | 
  29  |     }
  30  | 
  31  | 
  32  | 
  33  |     async login(username, password){
  34  | 
  35  | 
  36  |         await this.page.fill(
  37  |             this.username,
  38  |             username
  39  |         );
  40  | 
  41  | 
> 42  |         await this.page.fill(
      |                         ^ Error: page.fill: Test timeout of 30000ms exceeded.
  43  |             this.password,
  44  |             password
  45  |         );
  46  | 
  47  | 
  48  |         await this.page.click(
  49  |             this.loginButton
  50  |         );
  51  | 
  52  |     }
  53  | 
  54  | }
  55  | 
  56  | 
  57  | 
  58  | // Product Page Class
  59  | 
  60  | class ProductPage {
  61  | 
  62  | 
  63  |     constructor(page){
  64  | 
  65  |         this.page = page;
  66  | 
  67  | 
  68  |         this.product =
  69  |         "text=Sauce Labs Backpack";
  70  | 
  71  | 
  72  |         this.addButton =
  73  |         "button:has-text('Add to cart')";
  74  | 
  75  | 
  76  |         this.cart =
  77  |         ".shopping_cart_badge";
  78  | 
  79  |     }
  80  | 
  81  | 
  82  | 
  83  |     async addProduct(){
  84  | 
  85  | 
  86  |         await this.page.click(
  87  |             this.product
  88  |         );
  89  | 
  90  | 
  91  |         await this.page.click(
  92  |             this.addButton
  93  |         );
  94  | 
  95  | 
  96  |     }
  97  | 
  98  | 
  99  | 
  100 |     async checkCart(){
  101 | 
  102 | 
  103 |         return await this.page.textContent(
  104 |             this.cart
  105 |         );
  106 | 
  107 |     }
  108 | 
  109 | 
  110 | }
  111 | 
  112 | 
  113 | 
  114 | // Test Case
  115 | 
  116 | test(
  117 | "Ecommerce Add Product Test",
  118 | async ({page})=>{
  119 | 
  120 | 
  121 |     const loginPage =
  122 |     new LoginPage(page);
  123 | 
  124 | 
  125 |     const productPage =
  126 |     new ProductPage(page);
  127 | 
  128 | 
  129 | 
  130 |     // Open website
  131 | 
  132 |     await loginPage.open();
  133 | 
  134 | 
  135 | 
  136 |     // Login
  137 | 
  138 |     await loginPage.login(
  139 |         "standard_user",
  140 |         "secret_sauce"
  141 |     );
  142 | 
```