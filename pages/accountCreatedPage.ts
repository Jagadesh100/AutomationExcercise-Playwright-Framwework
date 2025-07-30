import { Locator, Page } from '@playwright/test'

export class AccountCreatedPage {
    readonly accountCreatedText: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.accountCreatedText = page.getByText('Account Created!');
        this.continueBtn = page.locator(".btn-primary");
    }
}