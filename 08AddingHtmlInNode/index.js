const express = require('express')
const app = express()
const path  = require('path')
const publicPath  = path.join(__dirname,'public')

app.use(express.static(publicPath));  //yha use aur express js ka function jo ki middleware se liye gya hai 
// but yha url me .html extension  ka use krna pdega 
// Suppose ham nhi chahte hai ki url me extenion show ho to ham is method ka use krenge
app.get('',(_,res)=>{
       res.sendFile(`${publicPath}/index.html`)                                                                                                                     
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)                                                                                                                     
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)                                                                                                                     
})

//ye 404 not found ka page hai
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/noFoundPage.html`)                                                                                                                     
})
app.listen(5000);