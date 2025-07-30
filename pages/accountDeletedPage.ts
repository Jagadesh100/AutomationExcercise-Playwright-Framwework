import { Locator, Page } from '@playwright/test'

export class AccountDeletedPage {
    readonly accountDeletedText: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.continueBtn = page.locator(".btn-primary");
    }
}