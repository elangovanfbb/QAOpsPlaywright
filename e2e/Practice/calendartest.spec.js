const {test, expect} = require("@playwright/test")

test("CALENDAR TEST", async({page})=>
{

    const date = "10";
    const month = 7;
    const year = "2028";
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    await page.locator(".react-date-picker--enabled").click()

    await page.pause()
    await page.locator(".react-calendar__navigation__label").click()
     await page.locator(".react-calendar__navigation__label").click()
     await page.locator("div[class='react-calendar__decade-view__years']").getByText(year).click()
     await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
     await page.locator("//abbr[text()='"+date+"']").first().click()


})