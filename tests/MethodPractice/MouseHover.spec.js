import { test, expect } from "@playwright/test"

test("Alerts", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

await page.hover("#mousehover")
await page.waitForTimeout(2000)
await page.click("//a[text()='Reload']")
//console.log(test.info())
})