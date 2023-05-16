import { test, expect } from '@playwright/test';
import functions from "./credentials";

test('FULL FLOW ', async ({ page }) => { 
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
 await enter.cheker();
 await enter.report();
 await enter.DoaID();
 await enter.instantCMS();
 await enter.completed();
 await page.pause();
})