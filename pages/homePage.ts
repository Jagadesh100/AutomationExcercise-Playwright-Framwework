import { Locator , Page } from "@playwright/test";

export class HomePage{
    readonly homeLink : Locator;
    readonly productsLink : Locator;
    readonly cartLink : Locator;
    readonly signUporLoginLink : Locator;
    readonly testcasesLink : Locator;
    readonly apiTestingLink : Locator;
    readonly videoTutorialsLink : Locator;
    readonly contactUsLink : Locator;
    readonly loggedInUserName : Locator;
    readonly currentUserName : Locator;
    readonly deleteAccountLink : Locator;
    readonly logOutLink : Locator;
    

    constructor(page:Page){
        this.homeLink = page.getByRole("link", {name:'Home'});
        this.productsLink = page.getByRole("link", {name:'Products'});
        this.cartLink = page.getByRole("link", {name:'Cart'});
        this.signUporLoginLink = page.getByRole("link", {name:'Signup / Login'});
        this.testcasesLink = page.getByRole("link", {name:'Test Cases'});
        this.apiTestingLink = page.getByRole("link", {name:'API Testing'});
        this.videoTutorialsLink = page.getByRole("link", {name:'Video Tutorials'});
        this.contactUsLink = page.getByRole("link", {name:'sContact us'});
        this.loggedInUserName = page.locator(".navbar-nav").locator("li a").last();
        this.currentUserName = this.loggedInUserName.locator("b"); 
        //page.locator(".navbar-nav").last().locator("li a b");
        this.deleteAccountLink = page.getByRole('link',{name:'Delete Account'});
        this.logOutLink = page.getByRole('link',{name:'Logout'});
    }
}