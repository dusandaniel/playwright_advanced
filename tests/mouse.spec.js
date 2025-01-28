import { test, expect } from '@playwright/test';

test.describe('Mouse', () => {

    test.beforeEach(async ({page}) =>{
        await page.goto('https://jspaint.app/');
    })

    test('Mouse paint', async ({ page }) => {
        //dostat sa niekam do prietoru, suradnice
        await page.mouse.move(200, 200);

        //stlacit mys
        await page.mouse.down();

        //nakreslit stvorec
        await page.mouse.move(400,200);
        await page.mouse.move(400,400);
        await page.mouse.move(200,400);
        await page.mouse.move(200,200);

        //uvolnenie mysi
        await page.mouse.up;

    });

})