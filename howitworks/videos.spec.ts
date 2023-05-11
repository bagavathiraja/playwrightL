import { test, expect } from '@playwright/test';


test('videos', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/videos',{ waitUntil: 'networkidle' });

 // await page.waitForTimeout(10000);

  await expect(page).toHaveScreenshot('videos.png',{ fullPage: true },);
 

});