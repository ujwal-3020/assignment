
// Write a script that connects to a MongoDB database and retrieves a collection.


// USING 'mongodb' NATIVE DRIVER
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const dbName = 'database_name';                     // REPLACE WITH DATABASE NAME
const collectionName = 'collection_name';           // REPLACE WITH COLLECTION NAME

async function retrieveCollection() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const documents = await collection.find({}).toArray();

        console.log('Documents in the collection:');
        console.log(documents);

    } catch (err) {
        console.error('Failed to retrieve collection:', err);
    } finally {
        await client.close();
    }
}

retrieveCollection()
.catch(console.error);



// USING 'mongoose'

const mongoose = require('mongoose');

const uri2 = `mongodb://localhost:27017/${dbName}`; 

const schema = new mongoose.Schema({
    key1: String,
    key2: String,
});

const ModelName = mongoose.model('CollectionName', schema);

async function retrieveCollection() {
    try {
        await mongoose.connect(
            uri2,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Connected successfully to MongoDB');

        const documents = await ModelName.find({});

        console.log('Documents in the collection:');
        console.log(documents);

    } catch (err) {
        console.error('Error retrieving collection:', err);
    } finally {
        await mongoose.disconnect();
    }
}

retrieveCollection()
.catch(console.error);