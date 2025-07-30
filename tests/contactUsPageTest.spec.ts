import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";
import { ContactUsPage } from "../pages/contactusPage";
import path from 'path';


const baseURL = 'http://automationexercise.com';
const userName = "TestUserName";
const emailAddress = "test124@gabc.com";
var dirname = '\FilesToUpload';
var fileName = 'TestFile.txt';
const expectedSuccessMessageContent = 'Success! Your details have been submitted successfully.';


let homePage: HomePage;
let contactUsPage: ContactUsPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactUsPage = new ContactUsPage(page);
});

test('Test Case 6: Contact Us Form', async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Contact Us' button
    await homePage.contactUsLink.click();
    await expect(contactUsPage.contactUsLink).toHaveCSS('color', 'rgb(255, 165, 0)')

    // Verify 'GET IN TOUCH' is visible
    await expect(contactUsPage.getInTouchHeading).toBeVisible();

    // Enter name, email, subject and message
    await contactUsPage.nameTextBox.fill(userName);
    await contactUsPage.emailTextBox.fill(emailAddress);
    await contactUsPage.subjectTextBox.fill('Test Subject');
    await contactUsPage.yourMessageTextArea.fill('Test Message');

    // Upload file
    await contactUsPage.uploadFile.setInputFiles(path.join(dirname, fileName));

    // on method waits for Javascript dialogbox and accepts the prompt
    page.on(
        'dialog',
        dialog => dialog.accept()
    );

    // Click on Submit button
    await contactUsPage.submitBtn.click();

    // Verify success message 'Success! Your details have been submitted successfully.' is visible
    await expect(contactUsPage.successMessage).toBeVisible();
    expect(await contactUsPage.successMessage.textContent()).toEqual(expectedSuccessMessageContent);

    //Click 'Home' button and verify that landed to home page successfully
    await contactUsPage.homeBtn.click();

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');
});

