const { SignInPage } = require('../../e2e/POMFiles/SignInPage')
const { DashboardPage } = require('../../e2e/POMFiles/DashboardPage')
const { CartPage } = require('../../e2e/POMFiles/CartPage')
const { CheckoutPage } = require('../../e2e/POMFiles/CheckoutPage')
const { OrderConfirmationPage } = require('../../e2e/POMFiles/OrderConfirmationPage')
const { MyOrdersPage } = require('../../e2e/POMFiles/MyOrdersPage')
const {Before, After, BeforeStep, AfterStep, Status, BeforeAll, AfterAll} = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')

Before(async function () {


     const browser = await chromium.launch({headless: false})
  const context = await browser.newContext()
  this.page = await context.newPage()
  console.log("FIRST ONE TO EXECUTE")
    
})

After(async function () {

    console.log("LAST ONE TO EXECUTE")
    
})

BeforeStep(async function () {
    console.log("CHECKING STATUS ")
    
})

AfterStep(async function ({result}) {
     console.log("CHECKING STATUS IN AFTER : ",result.status)

    if(result.status === Status.FAILED)
    {
        console.log(result.status)
        await this.page.screenshot({path : "failedscreenshot.png"})
    }
    
})