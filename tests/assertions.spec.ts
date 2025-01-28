import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  await page.goto('http://www.saucedemo.com');
  expect(page.locator('#user-name')).toBeVisible();
  await expect.soft(page.locator('#password')).toBeEditable();
  await expect(page.locator('#login-button')).toHaveCount(1);
  await expect(page.locator('#skillmea')).not.toBeVisible();
});