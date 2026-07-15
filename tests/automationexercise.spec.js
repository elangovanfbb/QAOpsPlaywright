const {test, expect} = require('@playwright/test')

test("AUTOMATION End to End", async({page})=>
{
    const email = "elan"+ Math.random()+"@yopmail.com"
    const password = "Elangovan@123"

    //Launch URL
    await page.goto("https://automationexercise.com/")

    const signUpLogin = page.locator("[href*='login']")
    await signUpLogin.click();

    //Creating an Account
    const signUpName = page.locator("[data-qa='signup-name']")
    const signUpEmail = page.locator("[data-qa='signup-email']")
    const signUpButton = page.locator("[data-qa='signup-button']")

    await signUpName.fill("ELANGOVAN")
    await signUpEmail.fill(email)
    await signUpButton.click()

    const mrRadio = page.locator("[for='id_gender1']")
    const passWord = page.locator("[data-qa='password']")
    const days = page.locator("[data-qa='days']")
    const months = page.locator("[data-qa='months']")
    const years = page.locator("[data-qa='years']")

    const fName = page.locator("[data-qa='first_name']")
    const lName = page.locator("[data-qa='last_name']")
    const company = page.locator("[data-qa='company']")
    const address = page.locator("[data-qa='address']")
    const country = page.locator("[data-qa='country']")
    const state = page.locator("[data-qa='state']")
    const city = page.locator("[data-qa='city']")
    const zipCode = page.locator("[data-qa='zipcode']")
    const mobileNumber = page.locator("[data-qa='mobile_number']")
    const createAccount = page.locator("[data-qa='create-account']")

   // await page.pause()
    await mrRadio.click();
    await passWord.fill(password)
    await days.selectOption("2")
    await months.selectOption("4");
    await years.selectOption("1994")
    await fName.fill("ELANGOVAN")
    await lName.fill("VENGAT")
    await company.fill("ASPIRE")
    await address.fill("100w 33rd st")
    await country.selectOption("United States")
    await state.fill("NY")
    await city.fill("NEW YORK")
    await zipCode.fill("560008")
    await mobileNumber.fill("5098890123")
    await createAccount.click()


    //----------------
    const continueButton = page.locator("[data-qa='continue-button']")

    await continueButton.click();
    const logout = page.locator("[href*='logout']")

    //Logging in
    const loginEmail = page.locator("[data-qa='login-email']")
    const loginPassword = page.locator("[data-qa='login-password']")
    const loginButton = page.locator("[data-qa='login-button']")

    await logout.click()
    await loginEmail.fill(email)
    await loginPassword.fill(password)
    await loginButton.click()

    //------------------

    //Add Product to cart
    const productIcon = page.locator(".card_travel")
    const allenCategory = page.locator("[href*='Allen']")
    const viewProduct = page.locator("(//a[text()='View Product'])[2]")

    await productIcon.click()
    await allenCategory.click()
    await viewProduct.click()
    
    
    
    //==================
    const quantity = page.locator("#quantity")
    const pdpAddToCart = page.locator(".cart")
    const continueShopping = page.locator("//button[text()='Continue Shopping']")

    await quantity.fill("")
    await quantity.fill("3")
    await pdpAddToCart.click()
    await continueShopping.click()

    await productIcon.click();

    //----------------------------

    const searchBar = page.locator("[name='search']")
    await searchBar.fill("Fancy Green Top")

    const searchButton = page.locator(".fa-search")
    await searchButton.click();

    const viewProductTwo = page.locator("//a[text()='View Product']")
    await viewProductTwo.click()

    const plpAddToCart = page.locator("(//i[@class='fa fa-shopping-cart'])[2]")
    await plpAddToCart.click()

    await continueShopping.click()

    const headerCart = page.locator("//ul[@class='nav navbar-nav']//a[@href='/view_cart']")
    await headerCart.click()

    const proceedCheckout = page.locator("//a[text()='Proceed To Checkout']")
    await proceedCheckout.click()

    const placeOrder = page.locator("//a[text()='Place Order']")
    await placeOrder.click();

    //Add Payment information
    const nameOnCard = page.locator("[data-qa='name-on-card']")
    const cardNumber = page.locator("[data-qa='card-number']")
    const cvv = page.locator("[data-qa='cvc']")
    const expiryMonth = page.locator("[name='expiry_month']")
   // const expiryMonth = page.locator("[data-qa='expiry-month']")
    const expiryYear = page.locator("[data-qa='expiry-year']")
    const payConfirmOrder = page.locator("[data-qa='pay-button']")

    await nameOnCard.fill("ELANGOVAN VENGAT")
    await cardNumber.fill("4444444444444448")
    await cvv.fill("333")
  //  await page.pause()
    await expiryMonth.fill("12")
    await expiryYear.fill("2029")
    await payConfirmOrder.click()

    //Place order
    const OrderSuccessMessage = page.locator("//p[contains(text(),'Congratulations')]")
    const continueButtonOrderPage = page.locator("[data-qa='continue-button']")

    const message = await OrderSuccessMessage.textContent()
    console.log(message);
    await page.screenshot({path : 'tests/screenshots/'+ Date.now()+"orderSuccess.png"})

    await continueButtonOrderPage.click()



    




}
)
