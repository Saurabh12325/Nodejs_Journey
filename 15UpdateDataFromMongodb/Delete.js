const dbConnect = require('./mongodb')

const deleteData = async ()=>{
    const db =  await dbConnect();
     const result = await db.deleteOne(
        {name:'leopard'}
     )
 if(result.acknowledge){
    console.log('delete Successfully')
 }
}
deleteData()