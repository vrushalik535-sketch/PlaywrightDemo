const { test, expect } = require('@playwright/test');



// Login Page Class

class LoginPage {


    constructor(page){


        this.page = page;


        // First screen

        this.signInButton =
        "text=Sign in";



        // Username screen

        this.username =
        'input[placeholder="Username"]';


        this.nextButton =
        "text=Next";



        // Password screen

        this.password =
        'input[type="password"]';


    }




async open(){

    await this.page.goto(
        "https://systemplus.topsource.in/",
        {
            waitUntil:"domcontentloaded",
            timeout:60000
        }
    );


    await this.page
    .getByText("Sign in")
    .waitFor();

}



    async login(username,password){


    // Click Sign in and wait for new page

    const newPagePromise = 
    this.page.waitForEvent('popup');


    await this.page.click(
        this.signInButton
    );


    const loginPage = 
    await newPagePromise;



    // Enter username

    await loginPage.fill(
        'input[placeholder="Username"]',
        username
    );



    // Click Next

    await loginPage.getByText("Next").click();



    // Wait for password field

    await loginPage.waitForTimeout(2000);



    // Enter password

    await loginPage.fill(
        'input[type="password"]',
        password
    );



    // Click Next

    await loginPage.getByText("Next").click();


}


}




// Test Case


test(
"Portico HRMS Login Test",
async ({page})=>{


const loginPage =
new LoginPage(page);



await loginPage.open();



const homePage =
await loginPage.login(
"vrushali.kangane",
"vrush2728"
);



// URL validation

//await expect(homePage)
//.toHaveURL(
///HomeNew\.aspx/
//);



// Home page validation

// Wait for results page
await page.waitForLoadState('networkidle');

//await expect(homePage.getByText("Shortcuts")).toBeVisible();



console.log(
"Portico HRMS Login successful"
);


});

// Verify logout

await expect(homePage)
.toHaveURL(
/systemplus\.topsource\.in/
);



await expect(
homePage.getByText("Sign in")
)
.toBeVisible();



console.log(
"Logout successful"
);


});