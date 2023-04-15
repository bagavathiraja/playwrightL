import { test, expect } from '@playwright/test';

test.describe.parallel;

test('test1',async({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[id="user-name"]').fill('standard_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
});
test('test2',async({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[id="user-name"]').fill('problem_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
});
test('test3',async({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[id="user-name"]').fill('performance_glitch_user');
    await page.locator('[id="password"]').fill('secret_sauce');
   await page.locator('[id="login-button"]').click();
});



