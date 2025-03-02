const express = require('express')
require('./config')
const Product = require('./product')
const app = express()
app.use(express.json())

//post ki api

app.post('/create', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})
//get ki api 
app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data)
    console.warn(data)
})

//delete ki api
app.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params)
    console.log(req.params)
    res.send(data)
})
app.put('/update/:_id', async (req, res) => {
    let data = await Product.updateOne(
     req.params,{$set:req.body}
    )
    console.log(req.params)
    res.send(data)
})


app.listen(5000)