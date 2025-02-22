// http module kya hota hai ?
//Ans:- ye server ke request and response ko handle krta hai 
const http  = require('http');

const create = (req,res)=>{
    res.write("<h1>Hello this is Saurabh Srivastav</h1>");
    res.end();
}
 http.createServer(create).listen(4100);

