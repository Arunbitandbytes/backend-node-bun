const http = require('http')

const hostname = '127.0.0.3'
const port = 3001

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('give a biriyani')
    } else if (req.url === '/order') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('biriyani ordered successfully')
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('failed')
    }
})

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`)
})
