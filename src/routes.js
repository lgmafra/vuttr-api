const express = require('express')
const handle = require('express-async-handler')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

module.exports = routes
