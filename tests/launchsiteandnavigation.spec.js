const {test, expect } = require("@playwright/test")

test("Flipkart Demo", async({page})=>{

    await page.goto("https://www.yahoo.com//")

    await page.goto("https://login.salesforce.com/?locale=in");

    let title = await page.title()

    console.log("TITLE : ", title);

    let url = await page.url();
    console.log('URL :', url);

    await page.goBack();

    console.log("After go back");

    let title1 = await page.title()
    console.log("TITLE : ", title1);

   //y await page.reload();

  //  await page.goForward();


})