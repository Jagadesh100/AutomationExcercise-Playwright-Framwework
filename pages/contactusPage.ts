import { Page, Locator } from "@playwright/test";


export class ContactUsPage{
    readonly contactUsLink : Locator;
    readonly contactUsHeading : Locator;
    readonly getInTouchHeading : Locator;
    readonly nameTextBox : Locator;
    readonly emailTextBox : Locator;
    readonly subjectTextBox : Locator;
    readonly yourMessageTextArea : Locator;
    readonly uploadFile : Locator;
    readonly submitBtn : Locator;
    readonly successMessage : Locator;
    readonly homeBtn : Locator;

    constructor(page : Page) {
        this.contactUsLink = page.getByRole('link', {name: 'Contact Us'});
        this.contactUsHeading = page.getByRole('heading', {name:'Contact Us'});
        this.getInTouchHeading = page.getByRole('heading', { name: 'Get In Touch'});
        this.nameTextBox = page.locator('//input[@Name="name"]');
        this.emailTextBox = page.locator('//input[@Name="email"]');
        this.subjectTextBox = page.locator('//input[@Name="subject"]');
        this.yourMessageTextArea = page.locator('#message');
        this.uploadFile = page.locator('//input[@Name="upload_file"]');
        this.submitBtn = page.getByRole('button', { name: 'Submit'});
        this.successMessage = page.locator('.status.alert.alert-success');
        this.homeBtn = page.locator('.btn.btn-success');
    }
}