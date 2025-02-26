const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; // Use 127.0.0.1 instead of localhost
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    try {
        let result = await client.connect();
        let db = result.db(database);
        let collection = db.collection('products');
        let response = await collection.find({}).toArray();
        console.log(response);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close(); // Close connection after use
    }
}

getData();
