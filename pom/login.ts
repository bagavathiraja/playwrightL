import { test, expect , Page} from '@playwright/test';

export default class login{

constructor (public page : Page ){

}
async GOnetBanking(){

    this.page.goto('https://nbuat.kotak.com/knb2//');

}


async enterCRN(){
    
     this.page.locator('[id="userName"]').fill("11516004");
     //.fill("11516004")
}
async timeout(){

    this.page.waitForTimeout(10000); 
}
async submitCRN(){

    this.page.locator('[type="submit"]').click();

}
async enterPass(){

    this.page.locator('[id="credentialInputField"]').fill("Quality123");

}
async submitPass(){

    this.page.locator('[type="button"]').click();
}

async instantCMS(){

    this.page.locator("(//div[@class='nav-item-heading-content'])[14]").click();
}

async termsandcondition(){

    const termsframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');

    await termsframe.locator('[class="checkbox-label ng-star-inserted"]').click();

    await termsframe.locator("[aria-label='Edit Record']").click();

}

async account(){

    const accountDetailframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');

    await accountDetailframe.locator('//*[@id="cdk-step-content-0-0"]/div[2]/div/button').click();

}
async cheker(){

    const chekerframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');

    await chekerframe.locator('//div[@id="mat-select-value-11"]').click();
  
    await chekerframe.locator('//span[@class="mat-option-text"]').click();   
  
    await chekerframe.locator('//div[@class="steppr-footer card-footer ng-star-inserted"]//button[2]').click();
}
async report(){

  const reportframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');

  await reportframe.locator('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary primaryButton pull-right ng-star-inserted"]').click();
 
 }
 async DoaID(){

    const reportframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');
   
    const message = await reportframe.locator('[class="mat-dialog-content"]').textContent();
  
   // console.log(message);
  
   // console.log(message?.length);
  
    console.log(message?.substring(49, 66));
   
   }

   async completed(){

    const applicationframe = this.page.frameLocator('iframe[name="knb2ContainerFrame"]');

  const status1 = await applicationframe.locator('[class="mat-cell cdk-cell cdk-column-REFERENCE_ID mat-column-REFERENCE_ID ng-tns-c341-8 fg-DOA20230587019715-td ng-star-inserted"]').textContent();

  const status2 = await applicationframe.locator('[class="mat-cell cdk-cell cdk-column-CREATED_ON mat-column-CREATED_ON ng-tns-c341-8 fg-2023-05-08 12:36:13-td ng-star-inserted"]').textContent();

  const status3 = await applicationframe.locator('[class="mat-cell cdk-cell cdk-column-PRODUCT_DISPLAY_STATUS mat-column-PRODUCT_DISPLAY_STATUS ng-tns-c341-8 fg-Pending at Bank-td ng-star-inserted"]').textContent();

  console.log("CRN : ",status1,"Applied on : ",status2,"Status : ",status3);

  
   
   }



}
