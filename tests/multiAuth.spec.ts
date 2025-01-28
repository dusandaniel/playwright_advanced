import {test, expect} from '@playwright/test';

test.use({ storageState: '.auth/user.json' });

test.describe('Authentication', () => {

    test.only ('Verify successful user login', async ({page}) => {

        await page.goto('https://demoqa.com/login');
        await page.getByText('michald').isVisible();
        expect(page.getByRole('button', {name: 'Log out'})).toBeVisible();
    });
});


test.use({ storageState: '.auth/admin.json' });

test.describe('Authentication', () => {

    test.only ('Verify successful admin login', async ({page}) => {

        await page.goto('https://demoqa.com/login');
        await page.getByText('michald_admin').isVisible();
        expect(page.getByRole('button', {name: 'Log out'})).toBeVisible();
    });
});