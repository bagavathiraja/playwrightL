import { test, expect } from '@playwright/test';
import functions from "./credentials";

test('user', async ({ page }) => { 
 const enter =  new functions (page);
 await enter.GOnetBanking();
 await enter.enterCRN();
 await page.waitForTimeout(15000); 
 await enter.submitCRN();
 await enter.enterPass();
 await enter.submitPass();
 await enter.instantCMS();
 await enter.termsandcondition();
 await enter.multipleAccount();
 await page.waitForTimeout(15000); 
 //await enter.makerandcheker();
 await enter.report();
 await enter.DoaID();
 
})

test('cheker', async ({ page }) => { 
    const cheker =  new functions (page);
    await cheker.GOnetBanking();
    await cheker.EnterChekerCRN();
    await cheker.submitCRN();
    await cheker.enterPass();
    await cheker.submitPass();
    await cheker.instantCMS();
    await cheker.pendingApproval();
    await cheker.pendingApproval2();
    await cheker.pendingApproval3();
   
})