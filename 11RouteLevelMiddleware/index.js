const express = require('express')
const app = express()
const reqFilter = require('./middleware')
const route = express.Router()
route.use(reqFilter)

app.get('/', reqFilter,(req,res)=>{
    res.send("Welcome to the home page")
})
app.get('/about',(req,res)=>{
    res.send("Welcome to the about page")
})
route.get('/course',(req,res)=>{
    res.send("Welcome to the course page")
})
route.get('/contact',(req,res)=>{
    res.send("Welcome to the contact page")
})
app.use('/',route)  
app.listen(4100)
 