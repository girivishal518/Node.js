import http from 'node:http'

const hostname= 34233;
const port = 4000;

const server = http.createServer((req, res)=>{
    if(req==='/'){
        res.writeHead(200,{"content-type" : "text/plain"})
        res.write("hello world......")
        res.end()
    }else if(req==='/data'){
        res.writeHead(200,{"content-Type": "text/plain"})
        res.write("how are you...")
        res.end()
    }else{
       res.end()
    }
})

 server.listen(hostname, port,()=>{
        console.log(`running ${hostname}: ${port}`);
        
 })