import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage'; //import nasej stranky
import { HomePage } from '../page-objects/HomePage';


test('Verify home title', async ({ page }) => {
  //nova instancia triedy loginPage
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login();

  //overime, ci sme sa prihlasili a doslai sa na stranku po prihlaseni
  await expect(homePage.title).toBeVisible();
});


test('Verify add to card functionality', async ({ page }) => {
    //nova instacia triedy loginPage
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
  
    await loginPage.gotoLoginPage();
    await loginPage.login();

    // pridame produkt do kosika
    await homePage.clickOnAddToCard();
    //skontrolujeme, ci je tam 1
    await expect(homePage.cardBadge).toHaveText("1");

  });

  test('Delete product from card', async ({ page }) => {
    //nova instancia triedy loginPage
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
  
    await loginPage.gotoLoginPage();
    await loginPage.login();

    // pridame produkt do kosika
    await homePage.clickOnAddToCard();

    //skontrolujeme, ci je tam 1
    await expect(homePage.cardBadge).toHaveText("1");

    //ma sa zjavit tlacidko na vymazanie produktu z kosika
    await expect(homePage.deleteButton).toBeVisible();


    //klik na zmazanie produktu z kosiku
     await homePage.deleteButton.click();
    
     //skontrolujeme, ci je tam 0
    await expect(homePage.cardBadge).not.toBeVisible();

  });