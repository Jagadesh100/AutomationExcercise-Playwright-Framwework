import { Page, Locator } from "@playwright/test";

export class TestCasesPage {
    readonly testCasesLink: Locator;
    readonly testCasesHeading: Locator;

    constructor(page: Page) {
        this.testCasesLink = page.locator('//a[contains(text(),"Test Cases")]');
        this.testCasesHeading = page.getByRole('heading', { name: 'Test Cases', exact: true });
    }
}