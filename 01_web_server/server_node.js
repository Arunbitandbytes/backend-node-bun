const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.statusCode = 200 // everything is good
        res.setHeader('Content-Type', 'text/plain')
        res.end("give me samosas");
    } else if(req.url === '/samosa') {
        res.statusCode = 200 // everything is good
        res.setHeader('Content-Type', 'text/plain')
        res.end("thanks for ordering");
    } else {
        res.statusCode = 404 // everything is good
        res.setHeader('Content-Type', 'text/plain')
        res.end("404 not found");
    }
})

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}: ${port}`)
})




