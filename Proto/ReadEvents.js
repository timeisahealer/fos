import csv from 'csvtojson';
const csvFilePath='./data.txt';
csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
    })
    .on('done',(error)=>{
        console.log('end')
    })