import { HomePage } from "../pages/homePage";
import { TestCasesPage } from "../pages/testCasesPage";
import { test, expect } from "@playwright/test";

let homePage: HomePage;
let testCasesPage: TestCasesPage;
const baseURL = 'http://automationexercise.com';

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testCasesPage = new TestCasesPage(page);
});

test('Test Case 7: Verify Test Cases Page', async ({ page }) => {
    await page.goto(baseURL);

    // Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');

    // Click on 'Test Cases' button
    await homePage.testCasesLink.click();

    // Verify user is navigated to test cases page successfully
    await expect(testCasesPage.testCasesLink).toHaveCSS('color', 'rgb(255, 165, 0)');
    await expect(testCasesPage.testCasesHeading).toBeVisible();
});