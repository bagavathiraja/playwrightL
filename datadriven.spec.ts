import { test, expect } from '@playwright/test';

interface User{
    username : string;
    password : string;
}

var register : User[] = [
    {username : 'standard_user',  password : 'secret_sauce',  },
    {username: 'locked_out_user',  password : 'secret_sauce',   },
    {username : 'problem_user',  password : 'secret_sauce', },
    {username : 'performance_glitch_user',  password : 'secret_sauce', }

]
test('login', async ({ page }) => {
    for (var User of register) {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[id="user-name"]').fill(User.username);
    await page.locator('[id="password"]').fill(User.password);
    await page.locator('[id="login-button"]').click();
    }
});