const express = require('express')
const app = express();
// const path  = require('Public')
// const PathVariable  = path.join(__dirname,'Public')

app.set('view engine','ejs')

app.get('/profile',(_,resp)=>{
    const user = {
   name : "saurabh",
   email : "saurabhsri.mau@gmail.com",
   city : "ghaziabad",
   skills: ['java', 'php' ,'react', 'spring boot'],
   knowledge:['English','hindi','urdu']
    }
    resp.render('profile',{user})
})
app.listen(3500)