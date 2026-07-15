# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestFiles\endtoend.spec.js >> Create an order ZARA COAT 3
- Location: e2e\TestFiles\endtoend.spec.js:12:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('li[class*=\'items\']').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | class CartPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.firstProduct = page.locator("li[class*='items']").first()
  5  |         this.cartAddedProduct = page.locator("h3:has-text('ZARA COAT 3')")
  6  |         this.checkout = page.locator("text=Checkout")
  7  | 
  8  |     }
  9  | 
  10 |     async waitforFirstProductToLoad() {
> 11 |         await this.firstProduct.waitFor()
     |                                 ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  12 |     }
  13 | 
  14 |     async verifyAddedProductInCart() {
  15 |         const productCheckCart = await this.cartAddedProduct.isVisible()
  16 |         console.log(productCheckCart)
  17 |         return productCheckCart;
  18 |     }
  19 | 
  20 |     async navigateToCheckout() {
  21 |         await this.checkout.click()
  22 |     }
  23 | }
  24 | 
  25 | module.exports = { CartPage }
```