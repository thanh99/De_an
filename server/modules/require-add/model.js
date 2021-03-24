const mongoose = require('mongoose')
const schema = require("./schema")

const MODEL_NAME = 'requiredAdd'
const COLLECTION_NAME = 'requiredAdd' 

const model = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = model