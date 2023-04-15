import { test, expect } from '@playwright/test';
test('test',async({ page }) => {
  await page.goto('http://adactinhotelapp.com/');
  await page.locator('[id="username"]').fill('bagavathi22');
  await page.locator('[id="password"]').fill('9507alex');
  await page.locator('[id="login"]').click();
  await page.locator('[id="location"]').selectOption({label: 'London'});
  await page.locator('[id="hotels"]').selectOption({label: 'Hotel Sunshine'});
  await page.locator('[id="room_type"]').selectOption({label: 'Standard'});
  await page.locator('[id="room_nos"]').selectOption({value: '1' });
  await page.locator('[id="datepick_in"]').fill('12/04/2023');
  await page.locator('[id="datepick_out"]').fill('15/04/2023');
  await page.locator('[id="adult_room"]').selectOption({ value: '2' });
  await page.locator('[id="child_room"]').selectOption({ value: '0' });
  await page.locator('[id="Submit"]').click();
  await page.locator('[id="radiobutton_0"]').click();
  await page.locator('[id="continue"]').click();
  await page.locator('[id="first_name"]').fill('bagavathi');
  await page.locator('[id="last_name"]').fill('raja');
  await page.locator('[id="address"]').fill('Melaplayam , Tirunelveli ,Tamilnadu');
  await page.locator('[id="cc_num"]').fill('0123456789123456');
  await page.locator('[id="cc_type"]').selectOption({label: 'VISA'});
  await page.locator('[id="cc_exp_month"]').selectOption({value: '3'});
  await page.locator('[id="cc_exp_year"]').selectOption({label: '2013'});
  await page.locator('[id="cc_cvv"]').fill('555');
  await page.locator('[id="book_now"]').click();
  await page.locator('[id="logout"]').click();

});
