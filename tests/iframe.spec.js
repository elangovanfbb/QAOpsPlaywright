const{test,expect}=require('@playwright/test')
test('FRAMES', async({page})=>{

    await page.goto("https://demo.guru99.com/test/guru99home/")

    await page.waitForTimeout(10000);

    await page.frameLocator("//iframe[@id='a077aa5e]").locator("//img[@src='Jmeter720.png']").click();

    //await page.waitForTimeout(3000);
})