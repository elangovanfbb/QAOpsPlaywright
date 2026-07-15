const ExcelJs = require('exceljs')

async function excelPlay()
{

const Workbook = new ExcelJs.Workbook()
await Workbook.xlsx.readFile(
  "C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx"
);
const workSheet = Workbook.getWorksheet("Sheet1")
workSheet.eachRow((row, rowNumber)=>
{
    row.eachCell((cell, CellNumber)=>
    {
        console.log(cell.value)
    })
})

}

excelPlay()

