const{test,expect} = require('@playwright/test')

test('Amazon Demo', async({page})=>{

    //1.Launch Amazon URL
    await page.goto("https://www.flipkart.com");

    //2. Get the page title

    let title = await page.title();

    console.log("Page title is : ", title);

    //3. Get the page URL

    let url = await page.url();
    console.log("Page URL :", url)

    await expect(page).toHaveURL(/flipkart/);

    //4. Close Browser

    await page.close();

})