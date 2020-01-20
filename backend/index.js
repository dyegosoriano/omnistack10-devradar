const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://omnistack10:omnistack10@omnistack-4xggp.mongodb.net/test?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Métodos: GET, POST, PUT , DELETE

// Tipos de parâmetros:

// Query Params: req.query (filtros, ordenação, paginação...)
// Route Params: req.params (Identificar um recurso na alteração ouremoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá mundo' })
})

app.listen(3333)
