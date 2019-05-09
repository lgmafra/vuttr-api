require('dotenv').config()

const express = require('express')
const validate = require('express-validation')
const Youch = require('youch')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exception () {
    this.express.use(async (error, req, res, next) => {
      if (error instanceof validate.ValidationError) {
        return res.status(error.status).json(error)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(error, req)

        return res.json(await youch.toJSON())
      }

      return res
        .status(error.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

module.exports = new App().express
