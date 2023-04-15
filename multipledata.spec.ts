import { test, expect } from '@playwright/test';
const dataInput = [{
  username: "standard_user",
  password: "secret_sauce"
},
{
  username: "locked_out_user",
  password: "secret_sauce"
},
{
  username: "problem_user",
  password: "secret_sauce"
},
{
  username: "performance_glitch_user",
  password: "secret_sauce"
}
]
dataInput.forEach(data => {
test('login', async({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[id="user-name"]').fill(data.username);
  await page.locator('[id="password"]').fill(data.password);
  await page.locator('[id="login-button"]').click();

})

});
