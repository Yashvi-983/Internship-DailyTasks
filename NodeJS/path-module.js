const path = require('path')
const filename = 'practice.txt'
const filepath = path.join(__dirname, filename)

const parseData = path.parse(filepath)
const resolveData = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)

console.log({parseData, resolveData,extname,basename})