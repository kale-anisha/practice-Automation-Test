const { expect } = require('@playwright/test');
exports.LoginPage =
    class LoginPage{
        constructor(page) {
            this.page = page;
            this.username = page.locator("//input[@name='username']");
            this.password = page.locator("//input[@name='password']");
            this.submit = page.locator("//button[@id='submit']");
            this.heading = page.locator("//h1[text()='Logged In Successfully']");
            this.logoutButton=page.locator("//a[text()='Log out']");
            this.errorMessage=page.locator("div#error");
        }
        async gotologinpage() {
            await this.page.goto("https://practicetestautomation.com/practice-test-login/");
        }
        async login(username, password) {
            await this.username.fill(username);
            await this.password.fill(password);
            await this.submit.click();
        }
        async loginVerify() {
            await expect(this.page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
            await expect(this.heading).toBeVisible();
            await expect(this.logoutButton).toBeVisible();
        }


    }