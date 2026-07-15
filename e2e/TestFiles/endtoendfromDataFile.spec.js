const { test, expect } = require('@playwright/test')
const { SignInPage } = require('../POMFiles/SignInPage')
const { DashboardPage } = require('../POMFiles/DashboardPage')
const { CartPage } = require('../POMFiles/CartPage')
const { CheckoutPage } = require('../POMFiles/CheckoutPage')
const { OrderConfirmationPage } = require('../POMFiles/OrderConfirmationPage')
const { MyOrdersPage } = require('../POMFiles/MyOrdersPage')
const dataset = JSON.parse(JSON.stringify(require('../TestData/endtoendfromDataFile.json')))

for(const data of dataset)
{
test(`Create an order ${data.productName}`, async ({ page }) => {

    // const userName = "elanelan@yopmail.com"
    // const password = "Elangovan@123"
    // const url = "https://rahulshettyacademy.com/client/#/auth/login"

    // const productName = "ZARA COAT 3"

    //Class Object Declaration
    const signInPage = new SignInPage(page)
    const dashboardPage = new DashboardPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    const orderConfirmationPage = new OrderConfirmationPage(page)
    const myOrdersPage = new MyOrdersPage(page)

    await signInPage.launchUrl(data.url)
    await signInPage.validLogin(data.username, data.password)

    console.log("ELAN")
    await dashboardPage.addToCart(data.productName)

    await dashboardPage.navigateToCart()

    await cartPage.waitforFirstProductToLoad()

    await expect(cartPage.verifyAddedProductInCart()).toBeTruthy()

    await cartPage.navigateToCheckout()

    await checkoutPage.selectCountry("Ind", "India")

    await checkoutPage.fillingCardInformation("Elangovan", "123")

    await checkoutPage.clickingPlaceOrderButton()


    //orderconfirmation page

    await orderConfirmationPage.checkingThanksMessage()

    //await orderConfirmationPage.getOrderNumber()
    const orderNumber = await orderConfirmationPage.getOrderNumber()
    console.log("Order Number" + orderNumber)

    await orderConfirmationPage.navigateToMyOrdersPage()

    await myOrdersPage.navigateToOrderDetailsPage(orderNumber)



    //await page.pause()


})
}