const dbConnect = require('./mongodb')

const main =  async () => {
    let db= await dbConnect()
    const result = await db.updateMany(
   {name:'max '},{$set :{name:"leopard",price:200}}
    )
    if(result.acknowledged){
        console.log('updated succesfully')
    }
}
main()