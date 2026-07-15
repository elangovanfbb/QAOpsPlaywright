const ExcelJS = require('exceljs')
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

writeExcel("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx", "Orange", "RAHUL")