import {Locator, Page} from '@playwright/test';  //import tried a modulov, kroe budeme pouzivat

//definovanie triedy Login page
export class LoginPage{
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMesage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedOutErrorMessage: Locator;

    //konstruktor triedy
    constructor(page: Page){
        this.page = page;

        //inicializacia premennych
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidCredentialsErrorMesage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required');
        this.lockedOutErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }
  

    //definovanie metod na pracu s tymito elementami
    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    //metoda na vpisanie username
    async enterLockedOutUsername(){
        await this.userNameInput.fill('locked_out_user');
    }

    async enterValidUsername(){
        await this.userNameInput.fill('standard_user');
    }

    async enterInvalidUsername(){
        await this.userNameInput.fill('meno');
    }

    //metoda na vpisanie passwordu
    async enterValidPassword(){
        await this.passwordInput.fill('secret_sauce');
    }

    async enterInvalidPassword(){
        await this.passwordInput.fill('heslo');
    }

    //metoda na kliknutie buttonu
    async clickLoginButton(){
        await this.loginButton.click();
    }

    //mozeme metody aj zapuzdrit do jednej metody
    //pouzila by sa iba jedna metoda a nie 3a
    async login(){
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}

