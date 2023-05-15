import { test, expect } from '@playwright/test';
import functions from "./login";

test('TERMS AND CONDITION ', async ({ page }) => { 
 const enter =  new functions (page);
 await enter.GOnetBanking();
 await enter.enterCRN();
 await page.waitForTimeout(15000); 
 await enter.submitCRN();
 await enter.enterPass();
 await enter.submitPass();
 await enter.instantCMS();
 await enter.termsandcondition(); 
 await enter.account(); 
 const cheker = await page.frameLocator('iframe[name="knb2ContainerFrame"]');
 await cheker.locator('[class="mat-select-arrow ng-tns-c70-24"]').click();
 await cheker.locator('[class="mat-option-text"]').click();
 await cheker.locator('//*[@id="cdk-step-content-0-1"]/div[2]/div/button[2]').click();
 console.log("user could continue only after selecting cheker and maker ");
 page.pause();

}
)