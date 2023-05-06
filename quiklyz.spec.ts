import { test, expect,Page} from '@playwright/test';

test.only('flow', async ({ page }) => {
  await page.goto('https://sit.quiklyz.com/');
  await page.locator('[class="Chennai col-md ng-star-inserted"]').click();
  await page.getByRole('link', { name: 'Find Cars' }).click();
  await page.locator('[placeholder="Search for your DREAM car (𝘣𝘺 𝘮𝘰𝘥𝘦𝘭, 𝘮𝘢𝘬𝘦)"]').fill('tata');
  const cars = page.locator('[class="fieldvalue ng-star-inserted"]').allTextContents();
  console.log(cars);
  await expect(page.locator('[class="fieldvalue ng-star-inserted"]')).toContainText(['Tata Nexon ']);
  await page.locator('[href="/car-detail/Tata-Nexon-XE-Petrol-Manual"]').click();
  //await page.pause();
  await page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[3]/div/div[1]/div[2]/div/div[2]/div/fg-select/div/div/div/div/mat-form-field/div/div[1]/div[3]')
  await page.click('//*[@id="mat-option-12"]');
  await page.locator('(//button[@aria-label="Edi Record"])[1]').click();
  //await page.pause();
});
test('new car', async ({ page }) => {
  await page.goto('https://sit.quiklyz.com/');
  await page.locator('[class="Chennai col-md ng-star-inserted"]').click();
  await page.pause();
  await page.locator('(//span[@class="mat-select-min-line ng-tns-c71-38 ng-star-inserted"])[1]').selectOption(" Sort by Price High to Low ");
  
});
