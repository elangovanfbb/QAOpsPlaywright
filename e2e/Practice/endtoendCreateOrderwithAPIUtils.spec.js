const {test, expect, request} = require('@playwright/test')
const {ApiUtils} = require('../APIUTILS/ApiUtils')

const loginPayLoad = {userEmail:"elanelan@yopmail.com",userPassword:"Elangovan@123"}
const orderPayload = {orders:[{country:"Austria",productOrderedId:"6960ea76c941646b7a8b3dd5"}]}

let response
test.beforeAll(async()=>
{
    const apiContext = await request.newContext({ignoreHTTPSErrors: true,})
   
    const apiUtils = new ApiUtils(apiContext, loginPayLoad)
   response =  await apiUtils.createOrder(orderPayload)

    
})

test("LOGIN", async({page})=>
{

    page.addInitScript(value=>
    {
        window.localStorage.setItem('token', value);
    },response.token
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
  if(orderValue === response.orderId)
  {
    console.log("PRESENT")
    await viewButton.click()
    
    break;
  }
   }

   //await page.pause()


})