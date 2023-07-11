const http=require('http')
const uc=require('upper-case')
const name='vishal'
http.createServer((req,res)=>{
    res.end(uc.upperCase(`Hello,${name},nice to meet you!`))
}).listen(3000)