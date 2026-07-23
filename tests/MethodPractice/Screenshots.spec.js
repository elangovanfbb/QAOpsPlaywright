import { test, expect } from "@playwright/test"

test("Element Screenshot", async ({ page }) => {

    await page.goto("https://www.myntra.com/")
   
   await page.locator("#desktop-header-cnt").screenshot({path : 'tests/MethodPractice/Images/myntra.png'})

})

test("Page Screenshot", async({page})=>
{
     await page.goto("https://www.myntra.com/")
     await page.screenshot({path : 'tests/MethodPractice/Images/myntrapage.png'})
})


test("Full Page Screenshot", async({page})=>
{
   // test.slow()
     await page.goto("https://www.myntra.com/", {
    waitUntil: "domcontentloaded"
})
     await page.screenshot({path : 'tests/MethodPractice/Images/myntrafullpage.png', fullPage : true})
})

