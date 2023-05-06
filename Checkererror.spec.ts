import { test, expect } from '@playwright/test';

test('Without maker and checker', async ({ page }) => {

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
  
    await expect(cheker.locator('[class="fieldvalue ng-star-inserted"]')).toContainText(['User role is required for every user in the User Info section']);
    
    console.log("User could not continue without selecting maker and checker ");
  
  });