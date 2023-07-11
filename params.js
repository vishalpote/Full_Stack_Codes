const ex=require('express')
const app=ex();

app.get('/users/:userName', (req, res) => {
    res.send(`the user name is:${req.params.userName}`)
  }).listen(3000)