const mongoose = require('mongoose');

// Define the schema for UG students
const ugSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  department: String,
  cgpa: Number
});

// Define the schema for PG students
const pgSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  department: String,
  gpa: Number
});

// Create the UG student collection
const UG = mongoose.model('UG', ugSchema);

// Create the PG student collection
const PG = mongoose.model('PG', pgSchema);

// Connect to the database
mongoose.connect('mongodb://localhost/students', { useNewUrlParser: true });

// Create some sample UG student documents
const ugStudents = [
  { name: 'John Doe', rollNo: 'UG1234', department: 'Computer Science', cgpa: 8.5 },
  { name: 'Jane Smith', rollNo: 'UG5678', department: 'Mechanical Engineering', cgpa: 9.0 },
  { name: 'Bob Johnson', rollNo: 'UG9012', department: 'Electronics and Communications', cgpa: 8.0 }
];

// Insert the UG student documents into the UG collection
UG.insertMany(ugStudents, function(error, docs) {
  if (error) {
    console.log(error);
  } else {
    console.log('Inserted UG students:', docs);
  }
});

// Create some sample PG student documents
const pgStudents = [
  { name: 'Sarah Lee', rollNo: 'PG1234', department: 'Computer Science', gpa: 3.5 },
  { name: 'Tom Williams', rollNo: 'PG5678', department: 'Mechanical Engineering', gpa: 3.8 },
  { name: 'Alice Brown', rollNo: 'PG9012', department: 'Electronics and Communications', gpa: 3.2 }
];

// Insert the PG student documents into the PG collection
PG.insertMany(pgStudents, function(error, docs) {
  if (error) {
    console.log(error);
  } else {
    console.log('Inserted PG students:', docs);
  }
});
