import { test, expect } from '@playwright/test';

test.describe('Tabs', () => {

    test('Multi tabs', async ({ page, context }) => {

    await page.goto('https://demoqa.com');

    //create second tab
    const newTab = await context.newPage();
    await newTab.goto('http://saucedemo.com');

    //bring demoqa to the front
    await page.bringToFront();

    //so strankou co je v pozadi vieme interagovat
    await newTab.locator('#login-button').click();
    //await page.pause();
    await newTab.close();
    //await page.pause();
    });



})