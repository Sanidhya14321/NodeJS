import http from 'http'
const server=http.createServer((req,res)=>{
    if(req.url==="/")   {
        // res.end("<h1>HOME </h1>")
        res.end("<a href=/about'</a>About</a>")
    }else if(req.url==="/about"){
        res.end("<h1>About Us</h1>")
    }

})

server.listen(8000,()=>console.log("Server UP"))