const{test, expect} = require('@playwright/test')

test("DROPDOWN TEST", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const dropdown = page.locator("select.form-control")
    await dropdown.selectOption("teach")
    await page.locator("[value='user']").click();
   // await page.pause();

    await page.locator("#okayBtn").click();

    expect(await page.locator("[value='user']")).toBeChecked();

    console.log(await page.locator("[value='user']").isChecked());

    const checkbox = page.locator("#terms")
    await checkbox.click()

    expect(await checkbox).toBeChecked();

    await checkbox.uncheck()

    expect(await checkbox.isChecked()).toBeFalsy();
    
}
)