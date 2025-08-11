const { hostname } = require('os')
const url = require('url')

const urlObj = {
    protocol: 'http',      
    hostname : 'localhost',
    port : 3000,
    pathname : '/path',
    query: {search : 'test', name: 'john'},
    hash : '#hash'
}
const myUrl = url.format(urlObj)
console.log(myUrl)




// const {URL} = require('url')

// const myurl = new URL('https://example.org:8080/p/a/t/h?query=string#hash');

// console.log(myurl.hostname)
// console.log(myurl.pathname)
// console.log(myurl.searchParams.get('query'))

