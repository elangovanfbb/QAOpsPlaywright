const {test, expect} = require("@playwright/test")

let webContext;
test.beforeAll("LOGIN", async({browser})=>
{

     const context = await browser.newContext()
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/client/")
     await page.locator("#userEmail").fill("elanelan@yopmail.com")
     await page.locator("#userPassword").fill("Elangovan@123")
     await page.locator("#login").click()
     await page.waitForLoadState('networkidle')
     const json = await context.storageState({path : "./state.json"})
     console.log(json)
     webContext = await browser.newContext({storageState : './state.json'})

    
}
)

test("TEST ONE", async()=>
{
     const page = await webContext.newPage()

      await page.goto("https://rahulshettyacademy.com/client/")

      //await page.pause()

      const products = page.locator(".card-body")
    const productName = "ZARA COAT 3"

    console.log("ELAN")
    await page.waitForLoadState("networkidle");
    console.log("ALL PRODUCTS : ", products)
     const allProducts = await page.locator(".card-body b")
    console.log(await allProducts.allTextContents())
    console.log("ELANHGUH")
   

    const count =await products.count();

       console.log("COUNT : ", count)



   await page.locator("[routerlink*='cart']").click()



})

test("TEST TWO ", async({})=>
{
     const page = await webContext.newPage()

      await page.goto("https://rahulshettyacademy.com/client/")

      //await page.pause()

      const products = page.locator(".card-body")
    const productName = "ZARA COAT 3"

    console.log("ELAN")
    await page.waitForLoadState("networkidle");
    await page.locator("[routerlink*='/dashboard/myorders']").click()
     await page.waitForLoadState("networkidle");
})