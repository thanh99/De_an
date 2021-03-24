const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    email: {
        type: String,
        require: [true, `yêu cầu 'email'`],
        unique: true
    },
    content: {
        type: String,
    },
})

module.exports = schema