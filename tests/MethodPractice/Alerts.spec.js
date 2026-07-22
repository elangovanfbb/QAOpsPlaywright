import { test, expect } from "@playwright/test"

test("Alerts", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.on("dialog", async dialog => {
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.accept()
    })
    await page.getByRole("button", { name: 'Alert' }).click()
    //await page.waitForTimeout(2000)


})

test("Confirm", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.on("dialog", async dialog => {
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.dismiss()
    })
    await page.locator("#confirmbtn").click()
    //  await page.waitForTimeout(2000)


})

test("Two dialogs", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.once("dialog", async dialog => {
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        dialog.dismiss()
    })
    await page.locator("#confirmbtn").click()
    await page.waitForTimeout(2000)

    await page.on("dialog", async dialog => {
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        dialog.accept()
    })
    await page.getByRole("button", { name: 'Alert' }).click()
    await page.waitForTimeout(2000)


})