import { test, expect } from '@playwright/test';


test('process', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/how-car-leasing-individuals-India/car-lease-process',{ waitUntil: 'networkidle' });

 // await page.waitForTimeout(10000);

  await expect(page).toHaveScreenshot('process.png',{ fullPage: true },);
 

});

