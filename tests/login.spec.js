import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage'; //import nasej stranky


test.describe('Login', () => {

test.only('Succesfull login', async ({ page }) => {
  //nova instacia triedy loginPage
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  
  //await loginPage.enterValidUsername();
  //await loginPage.enterValidPassword();
  //await loginPage.clickLoginButton();

  //alebo kratsi zapis, kedze sme si tuto metodu vytvorili
  await loginPage.login();

  //overime, ci sme sa prihlasili a doslai sa na stranku po prihlaseni
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Cannot login with valid username and invalid password', async ({ page }) => {
  //uprava reportu vysledkov htmll
  test.info().annotations.push({
    type: 'Test',
    description: 'This test will pass if the user is not able to login with valid username and invalid passoword.'
  });

    //nova instacia triedy loginPage
    const loginPage = new LoginPage(page);

  await test.step('Go to login page', async() =>{
    await loginPage.gotoLoginPage();
  });

  
  await test.step('Enter valid username', async() =>{
    await loginPage.enterValidUsername();
  });
  
  await test.step('Enter invalid password', async() =>{
    await loginPage.enterInvalidPassword();
  });
  
  
  await test.step('Click login button', async() =>{
    await loginPage.clickLoginButton();
  });

  await test.step('Verify invalid credentials error message', async() =>{
    await expect(loginPage.invalidCredentialsErrorMesage, 'Cannot find login error message').toBeVisible();
  });

});

test.only('Cannot login with invalid username and valid password', async ({ page }) => {
  //nova instacia triedy loginPage
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  

  await loginPage.enterInvalidUsername();
  await loginPage.enterValidPassword();

  await page.pause();

  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMesage).toBeVisible();

});

test('Cannot login with blank fields @slow', async ({ page }) => {
  //nova instacia triedy loginPage
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();


  await loginPage.clickLoginButton();
  await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();

});

test('Cannot login with locked out user', async ({ page }) => {
  //nova instacia triedy loginPage
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  

  await loginPage.enterLockedOutUsername();
  await loginPage.enterValidPassword();

  await loginPage.clickLoginButton();
  await expect(loginPage.lockedOutErrorMessage).toBeVisible();

});

})