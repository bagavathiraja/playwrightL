import { test, expect } from '@playwright/test';

let DOA

test('CMS flow', async ({ page }) => { 
  await page.goto('https://nbuat.kotak.com/knb2//');
  
  await page.locator('[id="userName"]').fill('11516004 ');

  await page.waitForTimeout(10000); 

  await page.locator('[type="submit"]').click();

  await page.locator('[id="credentialInputField"]').fill('Quality123');

  await page.locator('[type="button"]').click();

  await page.locator("xpath=//span[normalize-space()='Instant CMS']").click();

  const terms = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await page.waitForTimeout(10000); 
  
  await terms.locator('[class="checkbox-label ng-star-inserted"]').click();
 
  await terms.locator("[aria-label='Edit Record']").click();

  const accountDetail = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await accountDetail.locator('//*[@id="cdk-step-content-0-0"]/div[2]/div/button').click();

  const cheker = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await cheker.locator('[class="mat-select-arrow ng-tns-c70-24"]').click();

  await cheker.locator('[class="mat-option-text"]').click();

  await cheker.locator('//*[@id="cdk-step-content-0-1"]/div[2]/div/button[2]').click();


  const report = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await report.locator('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary primaryButton pull-right ng-star-inserted"]').click();
 
  const message = await report.locator('[class="mat-dialog-content"]').textContent();

  console.log(message);

 // console.log(message?.length);

  console.log(message?.substring(49, 66));

  page.pause();
  
});
