import { test, expect } from '@playwright/test';


test('compare', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/car-leasing/compare',{ waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('compare.png',{ fullPage: true },);
 
});