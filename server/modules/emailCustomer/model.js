const mongoose = require('mongoose')

const schema = require('./scheme')
const MODEL_NAME = 'emailCustomer'
const COLLECTION_NAME = 'emailCustomer'

const model = mongoose.model(
  MODEL_NAME,
  schema,
  COLLECTION_NAME
)

module.exports = model