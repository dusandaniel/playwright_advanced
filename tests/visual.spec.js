import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage'; //import nasej stranky

test.describe('Visual testing', () => {

    test.beforeEach(async ({page}) =>{
        const loginPage = new LoginPage(page);
    })

    test('Visual test - login page', async ({ page }) => {
        //metoda na vizualne testovanie
        await expect(page).toHaveScreenshot();
        //pry krat test spadne, lebo playwright nema s nim porovnavat.
        //v tests sa vytvoril obrazok
        //ak sa test spusti este raz, test prejde

        //nastavenie tolerancie pre vizualne porovnanie
        //await expect(page).toHaveScreenshot({maxDiffPixels: 100});
    });


})