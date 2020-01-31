const http = require('http')

port = 8001

const server = http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type' : 'text/plain'})
  res.end('Hello World')
})

server.listen(port,() => {
  console.log(`Server running on port ${port}`)
})