const express = require('express')
const handle = require('express-async-handler')
const validate = require('express-validation')

const routes = express.Router()

const ToolController = require('./app/controllers/ToolController')

const ToolValidator = require('./app/validators/Tool')

routes.get('/tools', handle(ToolController.index))
routes.post('/tools', validate(ToolValidator), handle(ToolController.store))
routes.delete('/tools/:id', handle(ToolController.delete))

module.exports = routes
