const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(' <h1> Creating http server using node js </h1>')
        res.end('hello ')
    } else if(req.url === '/about'){
        res.setHeader('Content-Type', 'text/plain')
        res.write('about page')
        res.end()
    }
})

server.listen(port, ()=> {
    console.log(`server listening on port http://localhost:${port}`)
})