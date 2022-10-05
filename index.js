
const express = require('express')
const app = express()
//const port = 8000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

.listen(process.env.PORT || 5000, () => {
  console.log(`App running .`)
})