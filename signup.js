const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String
});

// define model
const User = mongoose.model('User', UserSchema);

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));

// define routes
app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/signup">
      <label>Name:</label>
      <input type="text" name="name" required><br>
      <label>Email:</label>
      <input type="email" name="email" required><br>
      <label>Password:</label>
      <input type="password" name="password" required><br>
      <label>Phone:</label>
      <input type="tel" name="phone" required><br>
      <button type="submit">Sign up</button>
    </form>
  `);
});

app.post('/signup', (req, res) => {
  const { name, email, password, phone } = req.body;
  const user = new User({ name, email, password, phone });
  user.save()
    .then(() => res.send('Sign up successful'))
    .catch(err => res.status(400).send(`Error: ${err.message}`));
});

// start server
app.listen(3000, () => console.log('Server started on port 3000'));
