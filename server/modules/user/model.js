const mongoose = require('mongoose')
const schema = require("./scheme")

const MODEL_NAME = 'user'
const COLLECTION_NAME = 'user' 

const model = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = model