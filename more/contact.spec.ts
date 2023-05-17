import { test, expect } from '@playwright/test';


test('contact', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/contact-us',{ waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('contact.png',{ fullPage: true },);
 
});
