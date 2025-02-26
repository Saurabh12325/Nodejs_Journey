const express  =  require('express')
const dbConnect = require('./mongodb')
const app = express()
app.use(express.json())
//get api 
app.get('/', async (req,res)=>{
    let data = await dbConnect();
     data = await data.find().toArray()
     console.log(data)
     res.send(data)
})

//post api
app.post('/', async (req,res)=>{
    const db  = await dbConnect();
    const result = await db.insertOne( req.body )
      res.status(200).send(req.body)
      if(result.acknowledge){
        console.log('Posted Successfully')
      }
})
app.listen(4000)
//update api
// app.put('/', async (req,res)=>{
//    const db = await dbConnect();
//    const result = await db.updateOne( req.body )
   

// })