import { test, expect } from '@playwright/test';

test('status of doa', async ({ page }) => { 
  await page.goto('https://nbuat.kotak.com/knb2//');
  
  await page.locator('[id="userName"]').fill('11516004 ');

  await page.waitForTimeout(10000); 

  await page.locator('[type="submit"]').click();

  await page.locator('[id="credentialInputField"]').fill('Quality123');

  await page.locator('[type="button"]').click();

  await page.locator("xpath=//span[normalize-space()='Instant CMS']").click();

  const application = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  const status1 = await application.locator('[class="mat-cell cdk-cell cdk-column-REFERENCE_ID mat-column-REFERENCE_ID ng-tns-c341-8 fg-DOA20230587019715-td ng-star-inserted"]').textContent();

  const status2 = await application.locator('[class="mat-cell cdk-cell cdk-column-CREATED_ON mat-column-CREATED_ON ng-tns-c341-8 fg-2023-05-08 12:36:13-td ng-star-inserted"]').textContent();

  const status3 = await application.locator('[class="mat-cell cdk-cell cdk-column-PRODUCT_DISPLAY_STATUS mat-column-PRODUCT_DISPLAY_STATUS ng-tns-c341-8 fg-Pending at Bank-td ng-star-inserted"]').textContent();

  console.log("The status of :",status1,"Applied on :",status2,"is :",status3);

});