const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/bus_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Create schema for bus-depo collection
const busDepoSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number
});

// Create schema for busroute collection
const busRouteSchema = new mongoose.Schema({
  name: String,
  route: String,
  fare: Number
});

// Create models for bus-depo and busroute collections
const BusDepo = mongoose.model('BusDepo', busDepoSchema);
const BusRoute = mongoose.model('BusRoute', busRouteSchema);

// Insert documents into bus-depo and busroute collections
async function insertDocuments() {
  const busDepo = new BusDepo({
    name: 'Pune Bus Depo',
    location: 'Pune',
    capacity: 50
  });
  const result1 = await busDepo.save();
  console.log(result1);

  const busRoute = new BusRoute({
    name: 'Bus1',
    route: 'Pune to Satara',
    fare: 100
  });
  const result2 = await busRoute.save();
  console.log(result2);
}

// Find the name of a bus with a route from Pune to Satara
async function findBusName() {
  const busRoute = await BusRoute.findOne({ route: 'Pune to Satara' });
  console.log(busRoute.name);
}

// Call the functions to insert documents and find a bus name
insertDocuments();
findBusName();
