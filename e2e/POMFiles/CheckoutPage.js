class CheckoutPage {

    constructor(page) {
        this.page = page
        this.dropdown = page.locator("[placeHolder='Select Country']")
        this.dropdownMain = page.locator("section[class*='ta-results']")
        this.individualOption = this.dropdownMain.locator("button")
        this.cardName = page.locator("//div[text()='Name on Card ']/following-sibling::input")
        this.cvv = page.locator("//div[text()='CVV Code ']/following-sibling::input")
        this.placeOrder =  page.locator("//a[text()='Place Order ']")
    


    }

    async selectCountry(typeKeyword, FinalKeyword) {

        await this.dropdown.pressSequentially(typeKeyword)
        await this.dropdownMain.waitFor()
        const dropdownCount = await this.individualOption.count()
        console.log("DROPDOWN COUNT", dropdownCount)

        for (let i = 0; i < dropdownCount; i++) {
            const textt = await this.individualOption.nth(i).textContent()
            console.log(textt)
            if (textt.trim() === FinalKeyword) {
                console.log('COUNTRY')
                await this.individualOption.nth(i).click()
                break;
            }
        }
    }

    async fillingCardInformation(name, cvv) {

        await this.cardName.fill(name)
        await this.cvv.fill(cvv)
    }

    async clickingPlaceOrderButton()
    {
        await this.placeOrder.click()
    }
}

module.exports = { CheckoutPage }


