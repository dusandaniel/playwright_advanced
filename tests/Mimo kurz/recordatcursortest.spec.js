import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/bakkappaN');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('12345678');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('7777777');
  await page.getByRole('button', { name: '464654', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

});