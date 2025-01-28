import {test as setup, expect} from '@playwright/test';

let adminUser = "michald_admin";
let adminPassword = "P@ssw0rd#8$E!";
const adminAuthFile = '.auth/admin.json';

let userName = "michald";
let userPassword = "P@ssw0rd#8$E!";
const userAuthFile = '.auth/user.json';


setup("Create Admin Auth", async ({page, context}) =>{

    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill(adminUser);
    await page.getByPlaceholder('Password').fill(adminPassword);
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForURL('https://demoqa.com/profile')
    await context.storageState({path: adminAuthFile});
});

setup("Create User Auth", async ({page, context}) =>{

    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill(userName);
    await page.getByPlaceholder('Password').fill(userPassword);
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForURL('https://demoqa.com/profile')
    await context.storageState({path: userAuthFile});
});

/*
const authFile = './loginAuth.json';

setup('authenticate', async ({page}) =>{
await page.goto('https://demoqa.com/login');
await page.getByPlaceholder('UserName').fill('michald');
await page.getByPlaceholder('Password').fill('P@ssw0rd#8$E!');
await page.getByRole('button', {name: 'Login'}).click();

//check loggd in
await page.waitForURL('https://demoqa.com/profile')
await page.context().storageState({path: authFile});

})
*/