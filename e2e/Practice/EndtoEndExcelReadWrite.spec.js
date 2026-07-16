const ExcelJS = require('exceljs')
const {test , except} = require('@playwright/test')
async function writeExcel(filePath, searchText, replaceText) {

    const workBook = new ExcelJS.Workbook()
    await workBook.xlsx.readFile(filePath)
    const workSheet = workBook.getWorksheet("Sheet1")
    const cellValue = await readExcel(workSheet, searchText)

    const cell = workSheet.getCell(cellValue.row, cellValue.col)
    console.log("Before Replace : " + cell.value)
    cell.value = replaceText
    console.log("After Replace " + cell.value)
    await workBook.xlsx.writeFile(filePath)

}
async function readExcel(workSheet, searchText) {
    let obj = { row: 0, col: 0 }
    console.log("SEARCHINg : " + searchText)
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, columnNumber) => {
            if (cell.value == searchText) {
                obj.row = rowNumber
                obj.col = columnNumber
                console.log("FINDING " + cell.value)
            }
        })
    })

    return obj

}

//writeExcel("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx", "Orange", "RAHUL")

test("EXCEL EXERCISE", async({browser})=>
{
    const folderPath = "C:/Users/elangovan.vengat/Downloads/excelworld/download.xlsx"
    const context = await browser.newContext({acceptDownloads: true})
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")

   const downloadPromise =  page.waitForEvent('download')
    await page.locator("#downloadButton").click()
    const download = await downloadPromise
    await download.saveAs(folderPath)
    await writeExcel(folderPath,"Kivi", "MYANMAR")
    const upload = page.locator(".upload")
    await upload.setInputFiles(folderPath)
  // await  page.pause()

    

})