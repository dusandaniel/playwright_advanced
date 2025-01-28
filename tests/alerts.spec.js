import { test, expect } from '@playwright/test';


test.describe('Alerts', () => {

    test.beforeEach(async ({page}) =>{
        await page.goto('https://demoqa.com/alerts/');
    })

    test.only('Simple alert', async ({ page }) => {

        //Potrebujeme tiež listener, ktorý počká na zobrazenie alertu a následne ho potvrdí pomocou 
        page.on('dialog', async dialog => {
            await dialog.accept();
    })
        
        await page.locator('#alertButton').click();

    });

    test.only('Confirm alert', async ({ page }) => {

        page.on('dialog', async dialog => {
            await dialog.dismiss();
    })
        
        await page.locator('#confirmButton').click();
        await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');

    });

    test.only('Prompt alert', async ({ page }) => {

        page.on('dialog', async dialog => {
            await dialog.accept('skillmea');
    })
        
        await page.locator('#promtButton').click();
        await expect(page.locator('#promptResult')).toHaveText('You entered skillmea');

    });

})