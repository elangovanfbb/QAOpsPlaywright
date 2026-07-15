class DashboardPage {
    constructor(page) {
        this.page = page
        this.products = page.locator(".card-body")
        this.allProducts = page.locator(".card-body b")
        this.cartNavigator = page.locator("[routerlink*='cart']")

    }

    async addToCart(productName) {

        await this.page.waitForLoadState("networkidle");

        // console.log("ALL PRODUCTS : ", products)
        //const allProducts = await page.locator(".card-body b")
        console.log("ALL PRODUCTS " + await this.allProducts.allTextContents())
        console.log("ELANHGUH")
        const count = await this.products.count();
        // console.log(allProducts.first().textContent())
        // const count = 
        console.log("COUNT : ", count)
        for (let i = 0; i < count; i++) {
            console.log("INSIDE FOR LOOP")
            //  await page.pause()
            if (await this.products.nth(i).locator("b").textContent() == productName) {
                await this.products.nth(i).locator("text= Add To Cart").click()
                break;
            }
        }

    }

    async navigateToCart() {
        await this.cartNavigator.click()
    }
}

module.exports = { DashboardPage }