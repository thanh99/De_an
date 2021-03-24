const model = require('./model')
const mongoose = require('mongoose')
const { json } = require('body-parser')

const handlers = {
  /**
   * @description: query: 
   * - pageIndex: Number
   * - pageSize: Number
   * - count: Boolean
   * - sort: '1' | 'asc' | '-1' | 'desc'
   * - sortBy: field name (ex: 'title')
   * - filter & search: String
   */
  async findMany(req, res, next) {
    try {
      let {
        pageIndex = 1,
        pageSize = null,
        count,
        sort = 'asc',
        sortBy = 'name',
        search = '',
      } = req.query
      pageIndex = parseInt(pageIndex)
      pageSize = parseInt(pageSize)
      count = !!count

      let skip = (pageIndex - 1) * pageSize
      let limit = pageSize
      let conditions = {}
      if (search) {
        // find item with title contains search string
        conditions.name = new RegExp(search, 'i')
      }

      if (count) {
        let count = await model.countDocuments(conditions)
        res.json({ count })
      } else {
        let items = await model
          .find(conditions)
          .skip(skip)
          .limit(limit)
          .sort({
            [sortBy]: sort
          })

        res.json(items)
      }
    } catch (err) {
      next(err)
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id
      let item = await model
        .findById(id)
      console.log(item)
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body
      console.log(data)
      let item = await model.create(data)

      res.json(item)
      console.log(data)
    } catch (err) {
      next(err)
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id
      let item = await model.findByIdAndDelete(id)

      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async findEmailOfUser() {
    let items = await model
          .find()
        return(items)
  }
}

module.exports = handlers