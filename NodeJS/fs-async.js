//Asynchronous operations

const fs = require('fs')
const filename = 'Contents.txt'

//create a file or write content to a file
fs.writeFile(filename, 'This is async operation', 'utf-8', (err, data)=>{
    console.log(data)
})

//read a file
fs.readFile(filename,'utf-8', (err,data)=>{
    if(err) throw err;
    console.log(data)
})

//append to a file
fs.appendFile(filename, '\nThis is appended data', (err)=>{
    if(err) throw err
})

//rename a file
fs.rename('content.txt', 'Renamed.txt', (err) => {
    if (err) throw err
})

//delete a file
fs.unlink('new.txt', (err)=>{
    if (err) throw err
})