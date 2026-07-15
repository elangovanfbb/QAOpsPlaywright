const ExcelJS = require('exceljs')

async function playExcel()
{
    const workBook = new ExcelJS.Workbook()

    await workBook.xlsx.readFile("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx")
    const workSheet = workBook.getWorksheet("Sheet1")
    console.log("ELAQN")

    workSheet.eachRow((row, rowNumber)=>
    {
       // console.log(rowNumber)
        row.eachCell((cell, colNumber)=>
        {

           if(cell.value == "TOPIC")
           {
            console.log(rowNumber , colNumber)
            console.log(cell.value)

    
           }
            
           
            
        }
        )
    })

    // const cell = workSheet.getCell(3,2)
    // cell.value = "E"
    //  await workBook.xlsx.writeFile("C:/Users/elangovan.vengat/Downloads/excelworld/testexcel.xlsx")
 
    
}

playExcel()