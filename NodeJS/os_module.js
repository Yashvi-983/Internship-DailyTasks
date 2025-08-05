//OS Module 

const os = require('os')

console.log('Platform: ',os.platform())
console.log('OS Version: ', os.version())
console.log('User Information:', os.userInfo())
console.log('CPU Architecture: ',os.arch())
console.log('CPU Information:', os.cpus())
console.log('free memory', os.freemem(), 'bytes')
console.log('total memory', os.totalmem(), 'bytes')
console.log('system uptime', os.uptime(), 'seconds')
console.log('home dir: ', os.homedir())
console.log('host name: ', os.hostname())
console.log('network interfaces: ', os.networkInterfaces())
console.log('temporary directory: ', os.tmpdir())
console.log('OS type: ', os.type())
console.log('OS release: ', os.release())