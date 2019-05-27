import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send(demo.js)
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})