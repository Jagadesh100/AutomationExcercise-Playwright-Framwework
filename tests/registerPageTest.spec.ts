import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";
import { SignUpOrLoginPage } from "../pages/signUporLoginPage";
import { AccountCreatedPage } from "../pages/accountCreatedPage";
import { AccountDeletedPage } from "../pages/accountDeletedPage";

const baseURL = "http://automationexercise.com";
const userName = "TestUserName";
const password = "Test Password";
const emailAddress = "test125@gabc.com";
const existingEmailAddress = "test123@gmail.com";
let homePage: HomePage;
let registerPage: RegisterPage;
let signUpOrLoginPage: SignUpOrLoginPage;
let accountCreatedPage: AccountCreatedPage;
let accountDeletedPage: AccountDeletedPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    signUpOrLoginPage = new SignUpOrLoginPage(page);
    accountCreatedPage = new AccountCreatedPage(page);
    accountDeletedPage = new AccountDeletedPage(page);
})

test("Test Case 1: Register User", async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Signup / Login' button
    await homePage.signUporLoginLink.click();

    // Verify 'New User Signup!' is visible
    await expect(signUpOrLoginPage.signUpPageAssertion).toBeVisible();
    console.log(await signUpOrLoginPage.signUpPageAssertion.textContent());

    // Enter name and email address
    await signUpOrLoginPage.nameTextBox.fill(userName);
    await signUpOrLoginPage.signUpEmailTextBox.fill(emailAddress);
    await signUpOrLoginPage.signUpButton.click();

    // Fill details: Title, Name, Email, Password, Date of birth
    await expect(registerPage.enterAccountOnlyText).toBeVisible();
    console.log(await registerPage.enterAccountOnlyText.textContent());
    await registerPage.mrRadioBtn.check();
    // Assertion for Name and Email Textbox to be written
    await registerPage.passwordTextBox.fill(password);
    await registerPage.daySelector.selectOption('1');
    await registerPage.monthSelector.selectOption({ label: 'February' });
    await registerPage.yearSelector.selectOption("1997");

    await registerPage.firstNameTextBox.fill("Test First Name");
    await registerPage.lastNameTextBox.fill("Test Last Name");
    await registerPage.companyTextBox.fill("test Company");
    await registerPage.addressTextBox.fill("Test Address");
    await registerPage.countryDropDown.selectOption('India');
    await registerPage.stateTextBox.fill("Test State");
    await registerPage.cityTextBox.fill("Test City");
    await registerPage.zipCodeTextBox.fill("Test Zip Code");
    await registerPage.mobileNumberTextBox.fill("1111111111");
    await registerPage.createAccountBtn.click();

    // Verify that 'ACCOUNT CREATED!' is visible
    await expect(accountCreatedPage.accountCreatedText).toBeVisible();
    console.log(await accountCreatedPage.accountCreatedText.textContent());
    await accountCreatedPage.continueBtn.click();

    // Verify that 'Logged in as username' is visible
    await expect(homePage.loggedInUserName).toBeVisible();
    expect(await homePage.currentUserName.textContent()).toEqual(userName);
    console.log(await homePage.currentUserName.textContent());

    // Click 'Delete Account' button
    await homePage.deleteAccountLink.click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(accountDeletedPage.accountDeletedText).toBeVisible();
    console.log(await accountDeletedPage.accountDeletedText.textContent());
    await accountDeletedPage.continueBtn.click();

    // Verify user Navigated to Home Page
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');
    //await page.pause();

})

test("Test Case 5: Register User with existing email", async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Signup / Login' button
    await homePage.signUporLoginLink.click();

    // Verify 'New User Signup!' is visible
    await expect(signUpOrLoginPage.signUpPageAssertion).toBeVisible();
    console.log(await signUpOrLoginPage.signUpPageAssertion.textContent());

    // Enter name and already registered email address
    await signUpOrLoginPage.nameTextBox.fill(userName);
    await signUpOrLoginPage.signUpEmailTextBox.fill(existingEmailAddress);
    await signUpOrLoginPage.signUpButton.click();

    // Verify error 'Email Address already exist!' is visible
    await expect(signUpOrLoginPage.existEmailErrorText).toBeVisible();
})