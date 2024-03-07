
const express = require('express')
const app = express()
const port = 5022

app.get('/', (req, res) => {
  res.send('Hello World! from laurent')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
