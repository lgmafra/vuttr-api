const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Tool = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  tags: {
    type: Array,
    require: true
  }
})

Tool.plugin(mongoosePaginate)

module.exports = mongoose.model('Tool', Tool)
