const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá mundo' })
})

app.listen(3333)
