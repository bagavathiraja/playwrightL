import { test, expect } from '@playwright/test';

//ensure user cant proceed without accepting terms and condition

test('Terms and condition ', async ({ page }) => { 

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

//ENSURE BUTTON IS DISPLAYED WHEN NOT ACCEPTED

  if (Disabled) { 

  console.log('button is disabled');
  
}
  
  await terms.locator('[class="checkbox-label ng-star-inserted"]').click();
 
  await terms.locator("[aria-label='Edit Record']").click();

  console.log('user could proceed after accepting terms and condition');

  page.pause();

});