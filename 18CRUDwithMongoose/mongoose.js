const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/e-comm')
const ProductSchema = new mongoose.Schema(
    {name: String,
    category: String,
    price: Number,
brands:String}
  );
//   save schema in the databasr
const SaveInDb = async () =>{
   const productsModel = mongoose.model('Products',ProductSchema)
   let data = new productsModel({name:'ashish',category:'mobile',price:100})
   let result =  await data.save()
   console.log(result)
}
SaveInDb()
// update in data base 
const updateIdb= async ()=>{

    const productsModel = mongoose.model('Products',ProductSchema)
    let data = await productsModel.updateMany(
        {name:"ashish"},{
            $set:{price:700,brands:'iphone'}
        }
    )
    console.log(data)
}
updateIdb()

// delete in the mongodb
const deleteInDb = async () =>{
   const productsModel = mongoose.model('Products',ProductSchema)
   let data = await productsModel.deleteMany({name:"ashish"})
   console.warn(data)
   if(data.acknowledged){
    console.log('successful deleted')
   }

}
deleteInDb()

// read the data from the database
const ReadInDb = async ()=>{
    const productsModel = mongoose.model('Products',ProductSchema)
    let data = await productsModel.find();
    console.log(data)
}
ReadInDb()