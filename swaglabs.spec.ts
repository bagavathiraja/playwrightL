import { test, expect } from '@playwright/test';
test('test',async({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[id="user-name"]').fill('standard_user');
  await page.locator('[id="password"]').fill('secret_sauce');
  await page.locator('[id="login-button"]').click();
  await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[id="shopping_cart_container"]').click();
  await page.locator('[id="checkout"]').click();
  await page.locator('[id="first-name"]').fill('bagavathi');
  await page.locator('[id="last-name"]').fill('raja');
  await page.locator('[id="postal-code"]').fill('627005');
  await page.locator('[id="continue"]').click();
  await page.locator('[id="finish"]').click();
});