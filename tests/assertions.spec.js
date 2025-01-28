import { test, expect } from '@playwright/test';

test.only('Assertions', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator('#user-name')).toBeVisible();  //kontrola ci je viditelny

  //soft - ak nam zlyha asercia, nech pokracuje test dalej
  await expect.soft(page.locator('#password')).not.toBeEditable();   //ci je editovatelny
  await expect(page.locator('#login-button')).toHaveCount(1);  //ci sa na stranke nachadza tento element 1x
  await expect(page.locator('#skillmea')).not.toBeVisible(); //element skillmesa sa na stranke nenachadza a overujem, ze nie je viditelny

});