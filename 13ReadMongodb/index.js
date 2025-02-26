const dbConnect = require('./mongodb')
// using promises to handle response

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data)
//     })
//     })

// you can use any either promises or async await
    
//using async await to handle response
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}
main()

