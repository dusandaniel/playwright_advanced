import { test, expect } from '@playwright/test';


test.describe('Upload', () => {

    test.beforeEach(async ({page}) =>{
        await page.goto('https://demoqa.com/upload-download');
    })

    test('Upload file', async ({ page }) => {
        // import suboru

        await page.locator('#uploadFile').setInputFiles(['./skillmea.svg'])
        await expect(page.locator('#uploadedFilePath')).toBeVisible();
        await expect(page.locator('#uploadedFilePath')).toHaveText("C:\\fakepath\\skillmea.svg");

    });


})