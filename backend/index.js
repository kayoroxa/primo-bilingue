const express = require('express')
const pathJoin = require('path').join

const app = express()

app.listen(80, 'myapp.caio')

app.get('/', (req, res) => {
  res.sendFile(pathJoin(__dirname, '../index.html'))
})

console.log(`Rodando...`)
