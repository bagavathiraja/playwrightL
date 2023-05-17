import { test, expect } from '@playwright/test';


test('benifits', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/how-car-leasing-individuals-India/car-lease-benefits',{ waitUntil: 'networkidle' });

 // await page.waitForTimeout(10000);

  await expect(page).toHaveScreenshot('benifits.png',{ fullPage: true },);
 

});