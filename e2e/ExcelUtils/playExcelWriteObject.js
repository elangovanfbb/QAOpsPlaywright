const ExcelJS = require('exceljs')

async function playExcel()
{
    const workBook = new ExcelJS.Workbook()
    let obj = {row : 1, col : 1}

    await workBook.xlsx.readFile("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx")
    const workSheet = workBook.getWorksheet("Sheet1")
    console.log("ELAQN")

    workSheet.eachRow((row, rowNumber)=>
    {
       // console.log(rowNumber)
        row.eachCell((cell, colNumber)=>
        {

           if(cell.value == "ENY")
           {
            console.log(rowNumber , colNumber)
            console.log(cell.value)
            obj.row = rowNumber
            obj.col = colNumber

    
           }
            
           
            
        }
        )
    })

    const cell = workSheet.getCell(obj.row , obj.col)
    cell.value = "ENY"
     await workBook.xlsx.writeFile("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx")
 
    
}

playExcel()