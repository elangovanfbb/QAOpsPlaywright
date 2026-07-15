const {test, expect, request} = require('@playwright/test')
const {ApiUtils} = require('../APIUTILS/ApiUtils')

const loginPayLoad = {userEmail:"elanelan@yopmail.com",userPassword:"Elangovan@123"}
const orderPayload = {orders:[{country:"Austria",productOrderedId:"6960ea76c941646b7a8b3dd5"}]}
const fakePayLoadOrder = {data: [], message: "No Orders"}


let response
test.beforeAll(async()=>
{
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
   
    const apiUtils = new ApiUtils(apiContext, loginPayLoad)
   response =  await apiUtils.createOrder(orderPayload)

    
})

test("LOGIN", async({browser})=>
{

  const context = await browser.newContext({
    ignoreHTTPSErrors: true
});

const page = await context.newPage();

    page.addInitScript(value=>
    {
        window.localStorage.setItem('token', value);
    },response.token
    )
   await page.goto("https://rahulshettyacademy.com/client/")
   
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route=>
    {
      const response = await page.request.fetch(route.request())
      let body = JSON.stringify(fakePayLoadOrder)
      route.fulfill(
        {
          response,
          body,
        }
      )


    }
    
   )

   await page.locator("[routerlink*='/dashboard/myorders']").first().click()

  // await page.pause()

  
   }

  


)