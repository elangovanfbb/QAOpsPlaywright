const {test, expect} = require('@playwright/test')


test("Screenshot ", async({page})=>{

    await page.goto("https://www.gmail.com")
    await page.screenshot({path : 'google.png'})

   // await page.locator("[role='combobox']").screenshot({path : 'searchbox.png'})

    expect(await page.screenshot()).toMatchSnapshot('google.png')
})