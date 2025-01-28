import { test, expect } from '@playwright/test';

test.only('element state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //vypisanie stavu elementov
  console.log(await page.locator('#user-name').isEditable()); // ci je editovatelny
  console.log(await page.locator('#password').isVisible());  //ci je viditelny
  console.log(await page.locator('#login-button').isHidden());  //ci je skryty
});