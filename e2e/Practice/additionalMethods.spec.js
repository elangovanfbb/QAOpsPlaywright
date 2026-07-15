const{test, expect} = require("@playwright/test")

test("MORE VALIDATION", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // await page.goto("https://www.google.co.in")
    // await page.goBack()
    // await page.goForward()
    // await page.goBack()
    await expect( page.locator("#displayed-text")).toBeVisible()
    await page.locator("#hide-textbox").click()
     await expect( page.locator("#displayed-text")).toBeHidden()
     await page.locator("#show-textbox").click()
     await expect( page.locator("#displayed-text")).toBeVisible()

     //await page.pause()
     page.once("dialog", dialog=> dialog.accept())

     await page.locator("#alertbtn").click()

    // await page.locator("#confirmbtn").click()

      page.once("dialog", dialog=> dialog.dismiss())
     await page.locator("#confirmbtn").click()
})