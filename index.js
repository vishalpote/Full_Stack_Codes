const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'bus';
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    const collection = db.collection('busDepo');
    
    let inserdata =await collection.insertOne({name:"PCMC",pincode:4903});
    let data = await collection.find().toArray();
    console.log(inserdata);
    console.log(data);


                               
  }
  
 

  main()
 
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());