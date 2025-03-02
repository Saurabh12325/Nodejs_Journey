const express = require('express')
const app = express()
require('./config')
const Product = require('./product')
app.use(express.json())
app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
 let data = await Product.find(
    {
      "$or":[
        {"name":{$regex:req.params.key}},
        {"brands":{$regex:req.params.key}},
        {"category":{$regex:req.params.key}}
      ]
    }
 )
 res.send(data)

})
app.listen(5100)