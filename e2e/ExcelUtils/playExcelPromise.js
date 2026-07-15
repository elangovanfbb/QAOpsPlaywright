const ExcelJS = require('exceljs')

const WorkBook = new ExcelJS.Workbook()
WorkBook.xlsx.readFile("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx").then(function()
    {
    const WorkSheet = WorkBook.getWorksheet("Sheet1")
    WorkSheet.eachRow((r,rn)=>
    {
        r.eachCell((c,cn)=>
        {
            console.log(c.value)
        })
    })

    }
)