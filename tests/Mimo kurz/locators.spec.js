import { test, expect } from '@playwright/test';

test('Locators test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Prijať všetko' }).click(); //odkliknut pop up okno
    await page.getByLabel('Hľadať', { exact: true }).fill('api testing by testers talk');
    await page.getByLabel('Hľadať', { exact: true }).press('Enter');

  
    await page.waitForTimeout(7000);
        

  });