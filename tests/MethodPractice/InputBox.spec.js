const{test, expect} = require('@playwright/test')

test.only("Input Box", async ({ page }) => {
    page.goto("https://eventhub.rahulshettyacademy.com/login")

    const userName = await page.getByPlaceholder("you@email.com")
    await expect(userName).toBeVisible()
    await expect(userName).toBeEditable()
    await expect(userName).toBeEnabled()

    await userName.fill("elanelan@yopmail.com")

    const password = await page.locator("#password")
    await expect(password).toBeVisible()
    await expect(password).toBeEditable()
    await expect(password).toBeEnabled()

    await password.type("Elangovan@123")

    const loginButton = await page.locator("[class*='login-submit-btn']")

    await expect(await loginButton.toBeEnabled)
    loginButton.click()


})