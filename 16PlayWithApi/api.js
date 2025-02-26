const express  =  require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
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
      res.status(200).send(result)
      if(result.acknowledge){
        console.log('Posted Successfully')
      }
})

// update api
app.put('/:name', async (req,res)=>{
   const data = await dbConnect();
   const result = await data.updateOne(
    {name:req.params.name},{$set:req.body}
   )
   res.status(200).send({result:'update'})
   

})
//Delete api
app.delete('/:id',async (req,res)=>{
  const data = await dbConnect();
  const result = await data.deleteOne(
    {_id: new mongodb.ObjectId(req.params.id)})
res.send(result)
})
app.listen(4000)