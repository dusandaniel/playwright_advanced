// incluse playwrite module
const { test, expect } = require('@playwright/test');
//write a test
test('Validate youtube title', async({page}) => {
    //go to URL
    await page.goto('https://www.youtube.com/');
    await page.waitForTimeout(3000);
    await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();

    //Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress by testers talk');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000); //cakam 5 sekund

    //click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    //Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube');

})
