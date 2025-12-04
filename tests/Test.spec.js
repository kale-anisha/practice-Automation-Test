const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';

const username = "student";
const password = "Password123";
const successUrl = "https://practicetestautomation.com/logged-in-successfully/";


test.describe('Practice Test Automation Login', () => {

    test.beforeEach(async ({ page }) => {

        const login = new LoginPage(page);
        await login.gotologinpage();
        await page.waitForTimeout(3000)
    })
    //// Test Case 1 Correct username and Password 
    test('Login Successful Test', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(username, password);
        await expect(page).toHaveURL(successUrl);
        await login.loginVerify();

    })

    // Test Case 2 Incorrect UserName 
    test('error for Invalid Username', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login('incorrectUser',password);
        await expect(login.errorMessage).toBeVisible();

    })
    // Test Case 3 Incorrect Password 
    test('error for Invalid Password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(username,'1234');
        await expect(login.errorMessage).toBeVisible();

    })

    // Test Case 4 username and Password are empty or Zero
    test('error for Empty fields', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login("0","0");
        await expect(login.errorMessage).toBeVisible();

    })

})