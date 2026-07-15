const {test, expect} = require('@playwright/test')

test("LOGIN", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    const userEmail = await page.locator("#userEmail")
    const userPass = await page.locator("#userPassword")
    const login = await page.locator("[name='login']")

    await userEmail.fill("elanelan@yopmail.com");
    await userPass.fill("Elangovan@123");
    await login.click();

    const allProducts = await page.locator(".card-body b")

    console.log("ELAN")
    await page.waitForLoadState("networkidle");
    console.log(await allProducts.allTextContents())
    console.log("ELANHGUH")

   // console.log(allProducts.first().textContent())
})