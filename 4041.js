const http=require('http')
const fs=require('fs')
const s=http.createServer((req,res)=>{
    const fileName="."+req.url;
    fs.readFile(fileName,(err,data)=>{
        if(err)
        {
            res.writeHead(404,({'content-type':'text/html'}))
             return  res.end('404 not found')
        }
        else
        {
            res.writeHead(200,({'content-type':'text/html'}))
            return res.write(data)
            res.end();
        }
    })
}).listen(3000)