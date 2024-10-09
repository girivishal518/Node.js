import http from 'node:http'
// import dot from 'dotenv'
// dot.config()

// const myPort = process.env.PORT 

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type" : "text/plain" })
        res.write("hello world.....")
        res.end()
    } else if(req.url === '/data'){
        res.writeHead(200, {"Content-Type" : "text/plain" })
        res.write("how are youu.....")
        res.end()
    }else{
        res.write("error 404")
        res.end()
    }

})

server.listen(port, hostname, ()=>{
    console.log(`running on port ${hostname}: ${port}`);
    
})