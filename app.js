require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`TODO List app listening on port ${port}`)
})
