class CartPage {
    constructor(page) {
        this.page = page
        this.firstProduct = page.locator("li[class*='items']").first()
        this.cartAddedProduct = page.locator("h3:has-text('ZARA COAT 3')")
        this.checkout = page.locator("text=Checkout")

    }

    async waitforFirstProductToLoad() {
        await this.firstProduct.waitFor()
    }

    async verifyAddedProductInCart() {
        const productCheckCart = await this.cartAddedProduct.isVisible()
        console.log(productCheckCart)
        return productCheckCart;
    }

    async navigateToCheckout() {
        await this.checkout.click()
    }
}

module.exports = { CartPage }