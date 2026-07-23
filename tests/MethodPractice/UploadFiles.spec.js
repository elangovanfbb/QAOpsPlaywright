import { test, expect } from "@playwright/test"

test("Upload Files", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   
    await page.locator("#filesToUpload").setInputFiles("tests/MethodPractice/Files/testfile.xlsx")

    await page.waitForTimeout(2000)

})

