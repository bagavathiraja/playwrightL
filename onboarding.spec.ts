import { test, expect } from '@playwright/test';

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

  const locator = terms.locator("[aria-label='Edit Record']");

  const Disabled = await locator.isDisabled();

  await expect(locator).toBeDisabled(); 


//ENSURE BUTTON IS DISPLAYED WITHOUT ACCEPTING

  if (Disabled) { 
  console.log('button is disabled');
  }
  
  await terms.locator('[class="checkbox-label ng-star-inserted"]').click();
 
  await terms.locator("[aria-label='Edit Record']").click();

  const accountDetail = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await accountDetail.locator('//*[@id="cdk-step-content-0-0"]/div[2]/div/button').click();

//VERIFY USER COULD PROCEED WITHOUT ENTERING ACCOUNT DETAILS 

  console.log("procceded without entering account name and mobile number");

  const cheker = await page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await cheker.locator('//*[@id="mat-select-value-9"]/span').click();

  await cheker.locator('[class="mat-option-text"]').click();

  await cheker.locator('//*[@id="cdk-step-content-0-1"]/div[2]/div/button[2]').click();

  console.log("maker and cheker are selected ");

});

test.only('Without maker and checker', async ({ page }) => {

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

  await cheker.locator('//*[@id="cdk-step-content-0-1"]/div[2]/div/button[2]').click();

 //VERIFY USER COULD NOT PROCEED WITHOUT SELECTING MAKER AND CHEKER

 const error = await expect(cheker.locator('[class="fieldvalue ng-star-inserted"]')).toContainText(['User role is required for every user in the User Info section']);
  
 console.log(error);

  console.log("User could not continue without selecting maker and checker ");

});

