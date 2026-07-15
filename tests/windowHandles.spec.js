const{test, expect} = require('@playwright/test')

test("WINDOW HANDLE", async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const docLink = page.locator("[href*='document']");

    const [newPage] =await Promise.all([
   context.waitForEvent('page'),
   docLink.click(),
    ])

    console.log(typeof(newPage))
    const text1 = newPage.locator("[class='im-para red']")

   console.log(await text1.textContent());
   


    
}
)