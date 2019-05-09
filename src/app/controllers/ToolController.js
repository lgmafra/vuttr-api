const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    const filter = {}

    if (req.query.tag) {
      filter.tag = new RegExp(req.query.tag, 'i')
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
}

module.exports = new ToolController()
