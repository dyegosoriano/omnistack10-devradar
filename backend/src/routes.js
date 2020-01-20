const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá mundo' })
})

module.exports = routes
