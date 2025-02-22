const http = require("http");
const data  = require('./data')
http.createServer((req,response) =>{
    response.writeHead(200, {"Content-Type": "application/json"} )
    response.write(JSON.stringify(data));
    response.end()
}).listen(4000)