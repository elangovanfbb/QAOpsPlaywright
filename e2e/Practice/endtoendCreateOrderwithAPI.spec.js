const {test, expect, request} = require('@playwright/test')

const payLoad = {userEmail:"elanelan@yopmail.com",userPassword:"Elangovan@123"}
const orderPayload = {orders:[{country:"Austria",productOrderedId:"6960ea76c941646b7a8b3dd5"}]}

let token
let orderId
test.beforeAll(async()=>
{
    const apiContext = await request.newContext({ignoreHTTPSErrors: true,})
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,{ data : payLoad})
    expect((await loginResponse).ok).toBeTruthy()
    const loginResponseJson = await loginResponse.json()
    token = loginResponseJson.token;
    console.log(token)

   const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data : orderPayload,
            headers : 
            {
                "Authorization" : token,
                "Content-Type" : "application/json"
            },
        }
    )

    const orderResponseJson = await orderResponse.json();
    orderId = orderResponseJson.orders[0];
    console.log(orderId)
    
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
  if(orderValue === orderId)
  {
    console.log("PRESENT")
    await viewButton.click()
    
    break;
  }
   }

   //await page.pause()


})