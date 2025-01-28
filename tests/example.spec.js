// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  page.pause();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.use({baseURL: 'https://www.saucedemo.com/'});
test.only('get started link', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('aaaaa');
  await page.locator('[data-test="password"]').fill('bbbb');
  await page.locator('[data-test="login-button"]').click();


  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
