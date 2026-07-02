# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce.spec.js >> Ecommerce Add Product Test
- Location: tests\ecommerce.spec.js:117:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#add-to-cart-sauce-labs-backpack')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - button "Go back Back to products" [ref=e16] [cursor=pointer]:
        - img "Go back" [ref=e17]
        - text: Back to products
    - generic [ref=e20]:
      - img "Sauce Labs Backpack" [ref=e22]
      - generic [ref=e23]:
        - generic [ref=e24]: Sauce Labs Backpack
        - generic [ref=e25]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
        - generic [ref=e26]: $29.99
        - button "Add to cart" [ref=e27] [cursor=pointer]
  - contentinfo [ref=e28]:
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Twitter" [ref=e31]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e32]:
        - link "Facebook" [ref=e33]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e34]:
        - link "LinkedIn" [ref=e35]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e36]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  42  |         await this.page.fill(
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
  73  |         "#add-to-cart-sauce-labs-backpack";
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
> 91  |         await this.page.click(
      |                         ^ Error: page.click: Test timeout of 30000ms exceeded.
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
  107 | 
  108 |     }
  109 | 
  110 | 
  111 | }
  112 | 
  113 | 
  114 | 
  115 | // Test Case
  116 | 
  117 | test(
  118 | "Ecommerce Add Product Test",
  119 | async ({page})=>{
  120 | 
  121 | 
  122 |     const loginPage =
  123 |     new LoginPage(page);
  124 | 
  125 | 
  126 |     const productPage =
  127 |     new ProductPage(page);
  128 | 
  129 | 
  130 | 
  131 |     // Open website
  132 | 
  133 |     await loginPage.open();
  134 | 
  135 | 
  136 | 
  137 |     // Login
  138 | 
  139 |     await loginPage.login(
  140 |         "standard_user",
  141 |         "secret_sauce"
  142 |     );
  143 | 
  144 | 
  145 | 
  146 |     // Add product
  147 | 
  148 |     await productPage.addProduct();
  149 | 
  150 | 
  151 | 
  152 |     // Verify cart count
  153 | 
  154 |     let cartCount =
  155 |     await productPage.checkCart();
  156 | 
  157 | 
  158 | 
  159 |     expect(cartCount)
  160 |     .toBe("1");
  161 | 
  162 | 
  163 | 
  164 |     console.log(
  165 |         "Product added successfully"
  166 |     );
  167 | 
  168 | 
  169 | });
```