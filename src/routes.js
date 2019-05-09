const express = require('express')
const handle = require('express-async-handler')

const routes = express.Router()

const ToolController = require('./app/controllers/ToolController')

routes.get('/tools', handle(ToolController.index))
routes.post('/tools', handle(ToolController.store))
routes.delete('/tools/:id', handle(ToolController.delete))

module.exports = routes
