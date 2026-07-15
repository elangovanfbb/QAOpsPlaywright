const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { chromium } = require('@playwright/test')

const { SignInPage } = require('../../e2e/POMFiles/SignInPage')
const { DashboardPage } = require('../../e2e/POMFiles/DashboardPage')
const { CartPage } = require('../../e2e/POMFiles/CartPage')
const { CheckoutPage } = require('../../e2e/POMFiles/CheckoutPage')
const { OrderConfirmationPage } = require('../../e2e/POMFiles/OrderConfirmationPage')
const { MyOrdersPage } = require('../../e2e/POMFiles/MyOrdersPage')


Given('Login to the application using {string} and {string}', {timeout : 100*1000}, async function (username, password) {

 

  //Class Object Declaration
  this.signInPage = new SignInPage(this.page)
  this.dashboardPage = new DashboardPage(this.page)
  this.cartPage = new CartPage(this.page)
  this.checkoutPage = new CheckoutPage(this.page)
  this.orderConfirmationPage = new OrderConfirmationPage(this.page)
  this.myOrdersPage = new MyOrdersPage(this.page)

  console.log("Opening website");
  await this.signInPage.launchUrl("https://rahulshettyacademy.com/client/#/auth/login")
  await this.signInPage.validLogin(username, password)
  console.log("Closing website");

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(this.signInPage)));

});


When('Add product {string} to cart', async function (productName) {
  console.log("ELAN")
  await this.dashboardPage.addToCart(productName)
  await this.dashboardPage.navigateToCart()
  await this.cartPage.waitforFirstProductToLoad()
});

Then('Verify product {string} available in cart', async function (productName) {
  await expect(this.cartPage.verifyAddedProductInCart()).toBeTruthy()
  await this.cartPage.navigateToCheckout()
});

When('Provide all the valid details and place the order', async function () {

  await this.checkoutPage.selectCountry("Ind", "India")

  await this.checkoutPage.fillingCardInformation("Elangovan", "123")

  await this.checkoutPage.clickingPlaceOrderButton()
});

Then('Verify the new order is present in order details page', async function () {
 
  await this.orderConfirmationPage.checkingThanksMessage()

    //await orderConfirmationPage.getOrderNumber()
    const orderNumber = await this.orderConfirmationPage.getOrderNumber()
    console.log("Order Number" + orderNumber)

    await this.orderConfirmationPage.navigateToMyOrdersPage()

    await this.myOrdersPage.navigateToOrderDetailsPage(orderNumber)

});

Then('Verify that login fails and error message displays', {timeout : 200*1000},async function () {

  console.log("VERIFYING ERROR")
           

         const validationMessage  =await this.signInPage.loginErrorValidation()
         console.log("VALIDATION MESSAGE : ", validationMessage)
  
         });