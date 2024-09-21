import http from 'http'
import fs from "fs"
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,"OK",{"Content-Type":"text/html"})
        res.write("<h1>HOME</h1>")
        res.write("<a href='/about'>About Us</a>")
    }
    else if(req.url==="/about"){
        res.writeHead(200,"OK",{"Content-Type":"text/html"})
        res.write("<h1>ABOUT US</h1>")
    }
})

server.listen(8000, ()=> console.log("Server Up"))