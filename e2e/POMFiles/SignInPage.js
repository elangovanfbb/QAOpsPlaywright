
const { expect } = require('@playwright/test')
class SignInPage {
    

    constructor(page) {

        this.page = page
        this.userEmail = page.locator("#userEmail")
        this.userPass = page.locator("#userPassword")
        this.loginButton = page.locator("[name='login']")
        this.validationErrorMessage = page.locator("[aria-label='Incorrect email or password.']")

    }

    async launchUrl(url) {
        await this.page.goto(url)
    }

    async loginErrorValidation() {

        await this.page.waitForTimeout(10);
        await expect(this.validationErrorMessage).toBeVisible();

        const errorMessage = await this.validationErrorMessage.textContent();
        console.log("ERROR MESSAGE : ", errorMessage)

        return errorMessage;



    }


    async validLogin(username, password) {

        await this.userEmail.fill(username)
        await this.userPass.fill(password)
        await this.loginButton.click()


    }



}

module.exports = { SignInPage }