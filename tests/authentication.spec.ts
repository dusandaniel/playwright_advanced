import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/login");
  });

  test.use({storageState: './loginAuth.json'});

  test("successful login", async ({ page }) => {  
      
      await page.getByText('michald').isVisible();
      await expect(page.getByRole('button', {name: 'Log out'})).toBeVisible();
    });