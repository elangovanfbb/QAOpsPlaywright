const {test, expect} = require('@playwright/test')

test("LOGIN PAGE TEST", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("input#username")
    const passWord = page.locator("#password")
    const signIn = page.locator("input#signInBtn")
    await userName.fill("elangovan");
    await passWord.fill("elanjbnj");

    console.log("Before click")
    await signIn.click();
    console.log("After click")

    console.log(await page.locator("[style*='block']").textContent())
    // console.log("TEXTT : ", text)

    await expect(page.locator("[style*='block']")).toContainText("username");
    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await passWord.fill("");
    await passWord.fill("Learning@830$3mK2");
    await signIn.click();

    await console.log(await page.locator(".card-body a").first().textContent())
    await console.log(await page.locator(".card-body a").last().textContent())
    await console.log(await page.locator(".card-body a").nth(2).textContent())

})