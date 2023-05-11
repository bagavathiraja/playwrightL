import { test, expect } from '@playwright/test';


test('expert', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/contact-us',{ waitUntil: 'networkidle' });

 // await page.waitForTimeout(10000);

  await expect(page).toHaveScreenshot('expert.png',{ fullPage: true },);
 

});