const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// Set up database connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database");
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Set up user schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the login system!</h1>');
});

// Sign up route
app.get('/signup', (req, res) => {
  res.send(`
    <h1>Sign up</h1>
    <form action="/signup" method="post">
      <label>Email:</label><br>
      <input type="email" name="email" required><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br>
      <button type="submit">Sign up</button>
    </form>
  `);
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.redirect('/login');
});

// Login route
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
      <label>Email:</label><br>
      <input type="email" name="email" required><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.send('User not found');
    return;
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid password');
  }
});

// Dashboard route
app.get('/dashboard', (req, res) => {
  const { user } = req.session;
  if (!user) {
    res.redirect('/login');
    return;
  }
  res.send(`
    <h1>Welcome to
