// Synchronous operations

const fs = require('fs')

const filename = 'content.txt'

//write content to a file Or create a new file 
fs.writeFileSync(filename, 'This is initial data')


// Read file 
const readfile = fs.readFileSync(filename, "utf-8")
console.log(readfile)


//append content to a file
const append = fs.appendFileSync(filename, '\nthis is updated data', 'utf-8')


//delete a file
const del = fs.unlinkSync(filename)
console.log(del)

//rename a file
const renamedFile = fs.renameSync('text.txt', 'content.txt')
console.log(renamedFile)