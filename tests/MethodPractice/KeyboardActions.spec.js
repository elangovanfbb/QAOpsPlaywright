import { test, expect } from "@playwright/test"

test("KeyBoard", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare")
    const input = await page.locator("[name='text1']")
    await input.fill("I AM AN ENGINEER")

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(2000)






})