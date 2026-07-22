import { test, expect } from "@playwright/test"

test("Alerts", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

   const framing = await page.frame("iframe-name")
await   framing.locator("//a[text()='Register']").click()
   await page.waitForTimeout(3000)

})