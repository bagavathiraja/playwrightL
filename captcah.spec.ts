import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://nbuat.kotak.com/knb2//');
  
  await page.locator('[id="userName"]').fill('10671509');

  const captchaElement = await page.locator('css = #crnForm > div:nth-child(4) > div:nth-child(1) > span > img');
  
  const captchaText = await captchaElement.textContent();

  console.log(captchaText);
  
  await page.pause();
});

//npx playwright test practice.spec.ts

