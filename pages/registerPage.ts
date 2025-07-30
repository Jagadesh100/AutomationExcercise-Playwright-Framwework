import { Page , Locator } from "@playwright/test";

export class RegisterPage {

    readonly enterAccountOnlyText : Locator;
    readonly mrRadioBtn : Locator;
    readonly mrsRadioBtn : Locator;
    readonly emailTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly daySelector : Locator;
    readonly monthSelector : Locator;
    readonly yearSelector : Locator;
    readonly newsLetterCheckBox : Locator;
    readonly offersCheckBox : Locator;
    readonly addressInfotext : Locator;
    readonly firstNameTextBox : Locator;
    readonly lastNameTextBox : Locator;
    readonly companyTextBox : Locator;
    readonly addressTextBox : Locator;
    readonly address2TextBox : Locator;
    readonly countryDropDown : Locator;
    readonly stateTextBox : Locator;
    readonly cityTextBox : Locator;
    readonly zipCodeTextBox : Locator;
    readonly mobileNumberTextBox : Locator;
    readonly createAccountBtn : Locator;
   

    constructor(page:Page){
       
        this.enterAccountOnlyText = page.getByText("Enter Account Information");
        this.mrRadioBtn = page.locator("#id_gender1");
        this.mrsRadioBtn = page.locator("#id_gender2");
        this.emailTextBox = page.locator("#email");
        this.passwordTextBox = page.locator("#password");
        this.daySelector = page.locator("#days");
        this.monthSelector = page.locator("#months");
        this.yearSelector = page.locator("#years");
        this.newsLetterCheckBox = page.locator("#newsletter");
        this.offersCheckBox = page.locator("#optin");
        this.addressInfotext = page.getByText("Address Information");
        this.firstNameTextBox = page.locator("#first_name");
        this.lastNameTextBox = page.locator("#last_name");
        this.companyTextBox = page.locator("#company");
        this.addressTextBox = page.locator("#address1");
        this.address2TextBox = page.locator("#address2");
        this.countryDropDown = page.locator("#country");
        this.stateTextBox = page.locator("#state");
        this.cityTextBox = page.locator("#city");
        this.zipCodeTextBox = page.locator("#zipcode");
        this.mobileNumberTextBox = page.locator("#mobile_number");
        this.createAccountBtn = page.getByRole("button",{name:'Create Account'});
        
    }
}