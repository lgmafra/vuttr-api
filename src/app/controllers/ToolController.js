const Tool = require('../models/Tool')
const path = require('path')

class ToolController {
  async index (req, res) {
    const filter = {}

    if (req.query.tag) {
      filter.tags = { $in: [new RegExp(req.query.tag, 'i')] }
    }

    const tools = await Tool.paginate(filter, {
      page: req.query.page || 1,
      limit: 20
    })

    return res.json(tools)
  }

  async store (req, res) {
    const tool = await Tool.create(req.body)

    return res.json(tool)
  }

  async delete (req, res) {
    await Tool.findByIdAndDelete(req.params.id)

    return res.json({})
  }

  documentation (req, res) {
    res.sendFile(
      path.resolve(__dirname, '..', '..', '..', 'public', 'index.html')
    )
  }
}

module.exports = new ToolController()
