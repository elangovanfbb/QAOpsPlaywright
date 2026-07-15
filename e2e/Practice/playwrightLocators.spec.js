const {test, expect } = require("@playwright/test")
const { link } = require("node:fs")

test("PLAYWRIGHT SPECIAL LOCATORS", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")

    await page.getByPlaceholder("Password").fill("ELANGOVAN")

    await page.getByLabel("Check me out if you Love IceCreams!").click()
    await page.getByLabel("Gender").selectOption("Female")

    await page.getByRole("button",{name:'Submit'}).click()
     //await page.pause()

     await page.getByText(" The Form has been submitted successfully!.").isVisible()

     await page.getByRole("link",{name:'Shop'}).click()

     await page.locator("app-card").filter({hasText :"Nokia Edge" }).getByRole("button",{name:"Add"}).click()
})