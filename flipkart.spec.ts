import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('[name = q]').fill('mobiles');
  await page.locator('[type="submit"]').click();
  let items = await page.locator('[class="_4rR01T"]').allTextContents();
  console.log(items) ;
  await expect('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]').toHaveText('SAMSUNG Galaxy F04 (Opal Green, 64 GB)');
  await page.pause();
  await expect (await page.locator('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]')).
  toHaveText('SAMSUNG Galaxy F04 (Opal Green, 64 GB)');
});
