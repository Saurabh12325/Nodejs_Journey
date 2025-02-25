const express = require('express')
const app = express()

const reqFilter=(req,res,next)=>{
//  console.log('reqFilter')
if(!req.query.age){
    res.send("please provide age")
}
else if(req.query.age<18){
    res.send('your age is not sufficient to use this page')
}
next()
}
app.use(reqFilter)


app.get('/',(req,res)=>{
    res.send('Welcome to the home page')
})
app.listen(4000);

// What is MiddleWare?
// In Node.js, middleware is a function that sits between the request and response in an application’s request-response cycle. 
// Middleware functions have access to the request object (req), the response object (res), and the next middleware function (next) in the application.