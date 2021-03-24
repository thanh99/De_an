const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, `Yêu cầu 'email'!`],
    unique: true
  },
})

module.exports = schema
