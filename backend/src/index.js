const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://soriano:Soriano123@tacitronin-4xggp.gcp.mongodb.net/devRadar?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Métodos: GET, POST, PUT , DELETE

// Tipos de parâmetros:

// Query Params: req.query (filtros, ordenação, paginação...)
// Route Params: req.params (Identificar um recurso na alteração ouremoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

app.use(cors(/*{ origin: 'http://localhost:3000' }*/))
app.use(express.json())
app.use(routes)

server.listen(3333)
