import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignUpOrLoginPage } from "../pages/signUporLoginPage";
import { AccountDeletedPage } from "../pages/accountDeletedPage";

const baseURL = 'http://automationexercise.com';
const userName = "TestUserName";
const password = "Test Password";
const emailAddress = "test124@gabc.com";
const incorrectEmailAddress = "incorrect124@gabc.com";
const incorrectPassword = "incorrectpassword";
let homePage: HomePage;
let signUpOrLoginPage: SignUpOrLoginPage;
let accountDeletedPage: AccountDeletedPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpOrLoginPage = new SignUpOrLoginPage(page);
    accountDeletedPage = new AccountDeletedPage(page);
})

test("Test Case 2: Login User with correct email and password", async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Signup / Login' button
    await homePage.signUporLoginLink.click();

    // Verify 'Login to your account' is visible
    await expect(signUpOrLoginPage.loginToYourAccountText).toBeVisible();
    console.log(await signUpOrLoginPage.loginToYourAccountText.textContent());

    // Enter correct email address and password
    await signUpOrLoginPage.loginEmailTextBox.fill(emailAddress);
    await signUpOrLoginPage.loginPasswordTextBox.fill(password);
    await signUpOrLoginPage.loginBtn.click();

    // Verify that 'Logged in as username' is visible
    await expect(homePage.loggedInUserName).toBeVisible();
    expect(await homePage.currentUserName.textContent()).toEqual(userName);
    console.log(await homePage.currentUserName.textContent());

    /*
    // Click 'Delete Account' button
    await homePage.deleteAccountLink.click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(accountDeletedPage.accountDeletedText).toBeVisible();
    console.log(await accountDeletedPage.accountDeletedText.textContent());
    await accountDeletedPage.continueBtn.click();

    // Verify user Navigated to Home Page
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color','rgb(255, 165, 0)');
    await page.pause();   
    */
})

test("Test Case 3: Login User with incorrect email and password", async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Signup / Login' button
    await homePage.signUporLoginLink.click();

    // Verify 'Login to your account' is visible
    await expect(signUpOrLoginPage.loginToYourAccountText).toBeVisible();
    console.log(await signUpOrLoginPage.loginToYourAccountText.textContent());

    // Enter incorrect email address and password
    await signUpOrLoginPage.loginEmailTextBox.fill(incorrectEmailAddress);
    await signUpOrLoginPage.loginPasswordTextBox.fill(incorrectPassword);
    await signUpOrLoginPage.loginBtn.click();

    // Verify error 'Your email or password is incorrect!' is visible
    await expect(signUpOrLoginPage.incorretDetailText).toBeVisible();
    console.log(await signUpOrLoginPage.incorretDetailText.textContent());
})

test("Test Case 4: Logout User", async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Signup / Login' button
    await homePage.signUporLoginLink.click();

    // Verify 'Login to your account' is visible
    await expect(signUpOrLoginPage.loginToYourAccountText).toBeVisible();
    console.log(await signUpOrLoginPage.loginToYourAccountText.textContent());

    // Enter correct email address and password
    await signUpOrLoginPage.loginEmailTextBox.fill(emailAddress);
    await signUpOrLoginPage.loginPasswordTextBox.fill(password);
    await signUpOrLoginPage.loginBtn.click();

    // Verify that 'Logged in as username' is visible
    await expect(homePage.loggedInUserName).toBeVisible();
    expect(await homePage.currentUserName.textContent()).toEqual(userName);
    console.log(await homePage.currentUserName.textContent());

    // Click 'Logout' button
    await homePage.logOutLink.click();

    // Verify that user is navigated to login page
    await expect(signUpOrLoginPage.loginToYourAccountText).toBeVisible();
    await expect(signUpOrLoginPage.signUpPageAssertion).toBeVisible();
    await expect(signUpOrLoginPage.loginBtn).toBeVisible();
    await expect(signUpOrLoginPage.signUpButton).toBeVisible();
    await expect(signUpOrLoginPage.signUpOrLoginLink).toHaveCSS('color', 'rgb(255, 165, 0)');
})

