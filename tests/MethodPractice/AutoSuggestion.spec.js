import { test, expect } from "@playwright/test"

test("Auto Suggestion", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const inputbox = await page.locator(".ui-autocomplete-input")

    await inputbox.fill("ch")

   //await page.waitForSelector(page.locator(".ui-menu"))
   expect(await page.locator(".ui-menu").isVisible())

   const dropdownMenus = await page.$$(".ui-menu-item-wrapper")
   

    //const dropdownMenus = await page.$$(".ui-menu-item-wrapper")
    console.log(dropdownMenus)
    for(let menu of dropdownMenus)
    {
        console.log(await menu.textContent())
        if(await menu.textContent() == "China")
        {
            await menu.click()
        }
    }

})