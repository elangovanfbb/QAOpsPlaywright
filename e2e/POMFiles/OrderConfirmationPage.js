class OrderConfirmationPage {
    constructor(page) {
        this.page = page
        this.thanksMessage = page.locator(".hero-primary")
        this.orderID = page.locator(".em-spacer-1 .ng-star-inserted")
        this.myOrders = page.locator("[routerlink*='/dashboard/myorders']").first()



    }

    async checkingThanksMessage() {
        const thanksMessage = await this.thanksMessage.textContent()
        console.log(thanksMessage)
    }

    async getOrderNumber() {
        const orderID = await this.orderID.textContent()
        const orderNumber = orderID.split(" ")[2]
        console.log("ORDERR ID : ", orderNumber)
        return orderNumber;
    }

    async navigateToMyOrdersPage()
    {

        await this.myOrders.click()
    }
}

module.exports = { OrderConfirmationPage }