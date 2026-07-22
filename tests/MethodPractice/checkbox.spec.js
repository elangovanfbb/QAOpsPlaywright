import { test, expect } from "@playwright/test"

test("Checkbox", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const checkbox1 = await page.locator("#checkBoxOption1")
    console.log(await checkbox1.isChecked())

    await expect(await checkbox1.isChecked()).toBeFalsy()

    await checkbox1.check()
    await expect(await checkbox1.isChecked()).toBeTruthy()
     console.log(await checkbox1.isChecked())



})