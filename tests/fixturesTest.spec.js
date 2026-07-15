const{test, expect} = require('@playwright/test')

test("Browser content Playwright Test", async({browser})=>
{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("http://cognizant.com/")

})

test("PLAYWRIGHT TEST WITH PAGE", async({page})=>
{

    await page.goto("https://www.aspiresys.com/")

    console.log(await page.title())

    await expect(page).toHaveTitle("Aspire Systems | IT Services & Consulting for Digital Transformation");
})