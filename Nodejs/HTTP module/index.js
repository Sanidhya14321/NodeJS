import http from 'http';

const server=http.createServer((req,res)=>{
    // console.log(req)
    // res.setHeader("Content-Type","text/html")
    // res.statusCode=404
    // res.statusMessage="BAD"
    res.writeHead(202,"Good",{"Content-Type":"text/html"})
    res.write("<h1>Welcome to nodejs Server")
})
server.listen(8000, ()=> console.log("Server Up"))