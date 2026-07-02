const { test, expect } = require('@playwright/test');


// Login Page Class

class LoginPage {


    constructor(page){

        this.page = page;

        this.username = "#user-name";

        this.password = "#password";

        this.loginButton = "#login-button";

    }



    async open(){

        await this.page.goto(
            "https://www.saucedemo.com/"
        );

    }



    async login(username, password){


        await this.page.fill(
            this.username,
            username
        );


        await this.page.fill(
            this.password,
            password
        );


        await this.page.click(
            this.loginButton
        );

    }

}



// Product Page Class

class ProductPage {


    constructor(page){

        this.page = page;


        this.product =
        "text=Sauce Labs Backpack";


        this.addButton =
        "button:has-text('Add to cart')";


        this.cart =
        ".shopping_cart_badge";

    }



    async addProduct(){


        await this.page.click(
            this.product
        );


        await this.page.click(
            this.addButton
        );


    }



    async checkCart(){


        return await this.page.textContent(
            this.cart
        );

    }


}



// Test Case

test(
"Ecommerce Add Product Test",
async ({page})=>{


    const loginPage =
    new LoginPage(page);


    const productPage =
    new ProductPage(page);



    // Open website

    await loginPage.open();



    // Login

    await loginPage.login(
        "standard_user",
        "secret_sauce"
    );



    // Add product

    await productPage.addProduct();



    // Verify cart count

    let cartCount =
    await productPage.checkCart();



    expect(cartCount)
    .toBe("1");



    console.log(
        "Product added successfully"
    );


});