const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Get the Teacher collection
  const collection = db.collection('Teacher');

  // Insert some documents
  collection.insertMany([
    { tno: 1, tname: 'John Doe', subject: 'JAVA' },
    { tno: 2, tname: 'Jane Smith', subject: 'Python' },
    { tno: 3, tname: 'Bob Johnson', subject: 'C++' },
    { tno: 4, tname: 'Alice Williams', subject: 'JAVA' },
    { tno: 5, tname: 'Peter Lee', subject: 'JavaScript' }
  ], function(err, result) {
    console.log("Inserted documents into the Teacher collection");

    // Find the teacher who is teaching "JAVA" subject
    collection.findOne({ subject: 'JAVA' }, function(err, doc) {
      console.log(`Details of teacher who is teaching JAVA subject: ${JSON.stringify(doc)}`);

      // Close the connection to the database
      client.close();
    });
  });
});
