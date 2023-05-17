import { test, expect } from '@playwright/test';

test('low to high', async ({ page }) => {
  await page.goto('https://www.quiklyz.com/');
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByRole('link', { name: 'Find Cars' }).click();
  await page.locator('.fgcustomsort > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click();
  await page.getByText('Sort by Price Low to High').click();
  let first =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(0).textContent();
  let second =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(1).textContent();
  let third =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(2).textContent();
  console.log('order of low to high = ' ,first ,second ,third);
  
});

test('high to low', async ({ page }) => {
  await page.goto('https://www.quiklyz.com/');
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByRole('link', { name: 'Find Cars' }).click();
  await page.locator('.fgcustomsort > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click();
  await page.getByText('Sort by Price High to Low').click();
  let first =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(0).textContent();
  let second =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(1).textContent();
  let third =  await page.locator('[class="col-sm-12 ng-star-inserted"]').nth(2).textContent();
  console.log('order of high to low = ' ,first ,second ,third);
  
});
test('new addition', async ({ page }) => {
  await page.goto('https://www.quiklyz.com/');
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByRole('link', { name: 'Find Cars' }).click();
  await page.locator('.fgcustomsort > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click();
  await page.getByText('Latest Additions').click();
  let NewCar =  await page.locator('[class="card galcard-3 noborder fgbox-shadow12 ng-star-inserted"]').nth(0).textContent();
  console.log(NewCar);
  await expect(page.locator('[class="card galcard-3 noborder fgbox-shadow12 ng-star-inserted"]').nth(0)).toContainText('Maruti Suzuki Fronx')
 
});
test.only('popular', async ({ page }) => {
  await page.goto('https://www.quiklyz.com/');
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByRole('link', { name: 'Find Cars' }).click();
// await page.locator('.fgcustomsort > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click();
//await page.getByText('Sort by Popularity').click();
  let popularcar =  await page.locator('[class="card galcard-3 noborder fgbox-shadow12 ng-star-inserted"]').nth(0).textContent();
  console.log(popularcar);
  await expect(page.locator('[class="card galcard-3 noborder fgbox-shadow12 ng-star-inserted"]').nth(0)).toContainText('Mahindra XUV400')
 
});