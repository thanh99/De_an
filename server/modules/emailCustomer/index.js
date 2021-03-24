const model = require('./model')
const sendMailHandler = require('../../sendMail')
const handlers = {
  async findMany(req, res, next) {
    // try {
    //   let categories = await model.find({ })
    //   res.json(categories)
    // } catch(err) {
    //   next(err)
    // }
    throw new Error('Not yet support!')
  },
  findOne(req, res, next) {
    throw new Error('Not yet support!')
  },
  async create(req, res, next) {
    try {
      let data = req.body
      console.log(data)
      console.log('a')
      let temp = {
        to: data.email,
        subject: 'subject',
        text: "hello",
        html: "<h1>hello</h1>"
      }
      console.log(temp)
      sendMailHandler.sendMail(temp)
      let email = await model.create(data)
    } catch(err) {
      next(err)
    }
  },
  update(req, res, next) {
    throw new Error('Not yet support!')
  },
  delete(req, res, next) {
    throw new Error('Not yet support!')
  }
}

module.exports = handlers