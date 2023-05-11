import { test, expect } from '@playwright/test';


test('eligibility', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/login',{ waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('eligibility.png',{ fullPage: true },);
 

});