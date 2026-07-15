class MyOrdersPage {
    constructor(page) {
        this.page = page
        this.allOrders = page.locator("[class*='table table-bordered table-hover ng-star-inserted'] tbody th")
        this.allView = page.locator("[class*='table table-bordered table-hover ng-star-inserted'] tbody td .btn-primary")
        this.orderPageTitle = page.getByText(" order summary")


    }

    async navigateToOrderDetailsPage(orderNumber) {

        console.log("ORDER NUMBER : "+orderNumber)
        await this.allOrders.first().waitFor()
        console.log("ALL ORDERS ", await this.allOrders.allTextContents())
        const allOrdersCount = await this.allOrders.count()
        console.log("ALL ORDERS COUNT : " , allOrdersCount)

        for (let i = 0; i < allOrdersCount; i++) {
            console.log("INSIDE")

            const orderValue = await this.allOrders.nth(i).textContent()
            const viewButton = await this.allView.nth(i)
            console.log("ORDER VALUE " +orderValue)
            if (orderValue === orderNumber) {
                console.log("PRESENT")
                await viewButton.click()

                break;
            }
        }

        await this.orderPageTitle.waitFor()

    }
}



module.exports = { MyOrdersPage }