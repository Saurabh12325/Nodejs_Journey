const dbConnect = require('./mongodb')

const insert = async ()=>{
    const db = await dbConnect();
  const  result = await db.insertMany(
    [
        {name: 'i phone',brands:'i phone',price:1200,category:'mobile'},
        {name: 'Redmi-8',brands:'Redmi',price:100,category:'mobile'},
        {name: 'Redmi-6',brands:'Redmi',price:120,category:'mobile'}
    ]
       
    )
   if(result.acknowledged){
    console.log('data inserted successfully')
   }
}

insert();