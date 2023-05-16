import { test, expect } from '@playwright/test';
import functions from "./credentials";

test('TERMS AND CONDITION ', async ({ page }) => { 
 const enter =  new functions (page);
 await enter.GOnetBanking();
 await enter.enterCRN();
 await page.waitForTimeout(15000); 
 await enter.submitCRN();
 await enter.enterPass();
 await enter.submitPass();
 await enter.instantCMS();
 const terms = await page.frameLocator('iframe[name="knb2ContainerFrame"]');
 await page.waitForTimeout(10000); 
 const locator = terms.locator("[aria-label='Edit Record']");
 const Disabled = await locator.isDisabled();
 await expect(locator).toBeDisabled(); 
 if (Disabled) { 
 console.log('button is disabled');
}
})