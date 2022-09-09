const XLSX = require('xlsx');

//absolute path for all pc with the data.xlsx
const source = __dirname+"/data.xlsx"

//convert to workbook obj. Could contain multiple sheets/ 
const workbook = XLSX.readFile(source);

//make a list of  json files of each sheet in a workbook
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

//print the list of json datas 
console.log(worksheets);


