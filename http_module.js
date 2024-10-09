import http from 'node:http'
import dot from 'dotenv'
dot.config()

const myPort = process.env.PORT || 3000
console.log(myPort);

const server = http.createServer((req, res)=>{
    //routing
    if(req.url ==='/'){
        res.writeHead(200, {"Content-Type" : "text/plain" })
        res.write("This is home page")
        res.end()
    }
    else if(req.url ==='/data'){
        res.writeHead(200, {"Content-Type" : "text/plain" })
        res.write("This  page is nothing ")
        res.end()
    }
    else{
        // res.statusCode = 404
        // res.write("<h1>404 NOT FOUND</h1>")
        
        // console.log('Chala ja BSDK');
        
        res.end();
    }
})

server.listen(myPort, ()=>{
    console.log(`Running on port ${myPort}`);
    
})