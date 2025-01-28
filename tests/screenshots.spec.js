import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage'; //import nasej stranky

test.describe('Screenshots', () => {

    test.beforeEach(async ({page}) =>{
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login();
    })

    test('Viewport screenshot', async ({ page }) => {
    //zachytene screenshotu stranky a kde sa maju screenshoty ukladat
    await page.screenshot({ path: 'screenshots/viewport.png'});
    });

    test('Full page screenshot', async ({ page }) => {
        //zachytene screenshotu celej stranky
        await page.screenshot({ path: 'screenshots/fullpage.png', fullPage: true});
        });


    test('Element screenshot', async ({ page }) => {
            //zachytene screenshotu jedneho konkretneho elementu
            await page.locator('#item_4_img_link').screenshot({ path: 'screenshots/element.png'});
        });

})