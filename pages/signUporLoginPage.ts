import { Page, Locator } from "playwright";

export class SignUpOrLoginPage {
    readonly signUpOrLoginLink: Locator;

    readonly signUpPageAssertion: Locator;
    readonly nameTextBox: Locator;
    readonly signUpEmailTextBox: Locator;
    readonly signUpButton: Locator;

    readonly loginToYourAccountText: Locator;
    readonly loginEmailTextBox: Locator;
    readonly loginPasswordTextBox: Locator;
    readonly loginBtn: Locator;

    readonly incorretDetailText: Locator;

    readonly existEmailErrorText: Locator;

    constructor(page: Page) {
        this.signUpOrLoginLink = page.getByRole('link', { name: 'Signup / Login' });

        this.signUpPageAssertion = page.locator("h2").getByText("New User Signup!");
        this.nameTextBox = page.locator("//input[@name='name']");
        this.signUpEmailTextBox = page.locator("//input[@data-qa='signup-email']");
        this.signUpButton = page.getByRole("button", { name: 'Signup' });

        this.loginToYourAccountText = page.locator("h2").getByText("Login to your account");
        this.loginEmailTextBox = page.locator("//input[@data-qa='login-email']");
        this.loginPasswordTextBox = page.locator("//input[@data-qa='login-password']");
        this.loginBtn = page.getByRole('button', { name: 'Login' });

        this.incorretDetailText = page.getByText("Your email or password is incorrect!");

        this.existEmailErrorText = page.getByText("Email Address already exist!");
    }
}