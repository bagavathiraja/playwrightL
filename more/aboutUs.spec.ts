import { test, expect } from '@playwright/test';


test('about us', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/about-us',{ waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('aboutUs.png',{ fullPage: true },);
 
});




