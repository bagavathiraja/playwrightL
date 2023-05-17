import { test, expect } from '@playwright/test';

test('home', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/',{ waitUntil: 'networkidle' });

  await page.locator('[class="Chennai col-md ng-star-inserted"]').click();

  await expect(page).toHaveScreenshot('home.png',{ fullPage: true , mask: [page.locator('')]},); 

});