// global objects in Node js

//Buffer
const buffer = Buffer.from('Hello')
console.log(buffer)

//setTimeout
setTimeout(() => {
    console.log('runs after 2 seconds')
}, 2000)

//setInterval
setInterval(() => {
    console.log('runs every 3 seconds')
}, 3000);


//process
console.log(`Process ID: ${process.pid}`)
console.log(`Node js Version ${process.version}`)


//__dirname and __filename
console.log(`Directory name: ${__dirname}`)
console.log(`file name: ${__filename}`)