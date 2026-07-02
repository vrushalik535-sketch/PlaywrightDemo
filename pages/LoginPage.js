class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '#username';
        this.password = '#password';
        this.submit = '#submit';
        this.successMessage = 'text=Logged In Successfully';
    }

    async open() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.submit);
    }
}

module.exports = { LoginPage };
