const{test, expect} = require('@playwright/test')

test("RADIO BUTTON", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const radioButton1 = await page.locator("//input[@value='radio1']")
    await expect(await radioButton1.isChecked()).toBeFalsy()

    await radioButton1.check()
    await expect(radioButton1.isChecked()).toBeTruthy()
    await page.waitForTimeout(4000)
})