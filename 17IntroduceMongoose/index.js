const mongoose = require('mongoose')

const main = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/e-comm')
  const ProductSchema = new mongoose.Schema(
    {name:String}
  )
  const productsModel = mongoose.model('products',ProductSchema)
  let data = new productsModel({name:'saurabh'})
  let result = await data.save()
  console.log(result)

  
}
main()