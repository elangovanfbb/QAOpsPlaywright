const {test, expect, request} = require('@playwright/test')

const payLoad = {userEmail:"elanelan@yopmail.com",userPassword:"Elangovan@123"}

let token
test.beforeAll(async()=>
{
    const apiContext = await request.newContext({ignoreHTTPSErrors: true,})
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,{ data : payLoad})
    expect((await loginResponse).ok).toBeTruthy()
    const loginResponseJson = await loginResponse.json()
    token = loginResponseJson.token;
    console.log(token)
    
})

test("LOGIN", async({page})=>
{
    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    // const userEmail = await page.locator("#userEmail")
    // const userPass = await page.locator("#userPassword")
    // const login = await page.locator("[name='login']")

    // await userEmail.fill("elanelan@yopmail.com");
    // await userPass.fill("Elangovan@123");
    // await login.click();

    page.addInitScript(value=>
    {
        window.localStorage.setItem('token', value);
    },token
    )
   await page.goto("https://rahulshettyacademy.com/client/")
    const products = page.locator(".card-body")
    const productName = "ZARA COAT 3"

    

    console.log("ELAN")
    await page.waitForLoadState("networkidle");
    console.log("ALL PRODUCTS : ", products)
     const allProducts = await page.locator(".card-body b")
    console.log(await allProducts.allTextContents())
    console.log("ELANHGUH")
   

    const count =await products.count();
    

   // console.log(allProducts.first().textContent())

  // const count = 
   console.log("COUNT : ", count)

  

   for(let i=0;i<count;i++)
   {
    console.log("INSIDE FOR LOOP")
   //  await page.pause()
    if(await products.nth(i).locator("b").textContent()==productName)
    {
        await products.nth(i).locator("text= Add To Cart").click()
        break;
    }
   }

   await page.locator("[routerlink*='cart']").click()

   await page.locator("li[class*='items']").first().waitFor()

   const productCheckCart = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
   console.log(productCheckCart)
   expect(productCheckCart).toBeTruthy()

   const checkout = await page.locator("text=Checkout")
   await checkout.click()

   const dropdown = await page.locator("[placeHolder='Select Country']")
   await dropdown.pressSequentially("Ind")

   const dropdownMain = await page.locator("section[class*='ta-results']")
   await dropdownMain.waitFor()

   const individualOption = await dropdownMain.locator("button")

  const dropdownCount = await individualOption.count()
   console.log("DROPDOWN COUNT",dropdownCount)

   for(let i =0; i <dropdownCount;i++)
   {
    const textt = await individualOption.nth(i).textContent()
    console.log(textt)
    if(textt.trim() === "India")
    {
        console.log('COUNTRY')
        await individualOption.nth(i).click()
        break;
    }
   }

   const cardName = await page.locator("//div[text()='Name on Card ']/following-sibling::input")
   await cardName.fill("ELANGOVAN")

   const cvv = await page.locator("//div[text()='CVV Code ']/following-sibling::input")
   await cvv.fill("123")

   const placeOrder = await page.locator("//a[text()='Place Order ']")
   await placeOrder.click()

   //orderconfirmation page

   const thanksMessage = await page.locator(".hero-primary").textContent()

   console.log(thanksMessage)

   const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   const orderNum = orderID.split(" ")[2]
   console.log("ORDERR ID : ",orderNum)

   await page.locator("[routerlink*='/dashboard/myorders']").first().click()

   const allOrders = await page.locator("[class*='table table-bordered table-hover ng-star-inserted'] tbody th")
  await allOrders.first().waitFor()
   console.log("ALL ORDERS ", await allOrders.allTextContents())

   const allOrdersCount = await allOrders.count()
   console.log("ALL ORDERS COUNT : ". allOrdersCount)

   const allView = await page.locator("[class*='table table-bordered table-hover ng-star-inserted'] tbody td .btn-primary")


   
   for(let i = 0;i<allOrdersCount;i++)
   {
    console.log("INSIDE")
    
  const orderValue = await allOrders.nth(i).textContent()
  const viewButton = await allView.nth(i)
  console.log(orderValue)
  if(orderValue === orderNum)
  {
    console.log("PRESENT")
    await viewButton.click()
    
    break;
  }
   }

   //await page.pause()


})