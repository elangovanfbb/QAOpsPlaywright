import { test, expect } from "@playwright/test"

test("Checkbox", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const dropdown = await page.locator("#dropdown-class-example")

    await dropdown.selectOption("option1")
    await page.waitForTimeout(1000)
    await dropdown.selectOption({ value: 'option2' })
    await page.waitForTimeout(1000)
    await dropdown.selectOption({ label: 'Option1' })
    await page.waitForTimeout(1000)



})