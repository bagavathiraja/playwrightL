import { test, expect } from '@playwright/test';


test('benifits', async ({ page }) => {

  await page.goto('https://www.quiklyz.com/car-lease-faqs-india',{ waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('faq.png',{ fullPage: true },);
 

});