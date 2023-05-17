import { test, expect } from '@playwright/test';

test('blogs', async ({ page }) => {

    
  await page.goto('https://www.quiklyz.com/blog', { waitUntil: 'networkidle' });

  //await page.waitForTimeout(5000);
   
  await expect(page).toHaveScreenshot('blog.png',{ fullPage: true ,mask: [page.locator('[class="fgdeck card-deck blogcard ng-star-inserted"]')]} )

});
