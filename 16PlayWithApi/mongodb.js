const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const database = 'e-comm'
const client = new MongoClient(url)

async function dbConnect(){
    const result = await  client.connect()
    db = result.db(database)
    return db.collection('products')
    
}
module.exports = dbConnect;
