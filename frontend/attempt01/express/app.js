// app.js

const express = require('express')
const app = express()
const port = 3000
var user = require('./user.js');
// var router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World from app.js!')
})

// app.use('/user', user)
 
app.get('/user', function(req, res){
    console.log("User Page")
    res.end();
});

app.use('/user', function(req, res, next){
     console.log("/user called")
     res.end();
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})