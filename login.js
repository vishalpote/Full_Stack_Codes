const express = require('express');
const app=express()


app.get('/', (req, res) => {
    res.send(`
      <h1>Sign up</h1>
      <form action="/" method="">
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Password:</label><br>
        <input type="password" name="password" required><br>
        <button type="submit">Sign up</button>
      </form>
    `);

});

    app.post('/', async (req, res) => {
        const { email, password } = req.body;
        res.end('login')
    }).listen(3000);
  