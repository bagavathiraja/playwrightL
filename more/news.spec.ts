import { test, expect } from '@playwright/test';

test('news', async ({ page }) => {

    
  await page.goto('https://www.quiklyz.com/news-insights', { waitUntil: 'networkidle' });

  //await page.waitForTimeout(5000);
   
  await expect(page).toHaveScreenshot('news.png',{ fullPage: true ,mask: [page.locator('//div[@class="article-news-page fgListPage ng-star-inserted"]//div[@class="ng-star-inserted"]//fg-form-list-page[@class="ng-star-inserted"]//fg-list[@class="ng-star-inserted"]//div[@class="content"]//div//fg-client-gallery-card-view[@class="ng-star-inserted"]//div[@class="ng-star-inserted"]//div//div[@class="card-group row flex-row flex-nowrap fg-gallery-card-horizontal-scroll card-deck fgdeck float-left newscard"]')]} )

});
