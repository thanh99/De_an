const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    type: {
        type: String,
        required: [true, `Yêu cầu 'type'!`]
    },
    description: {
        type: String,
        require: [true, `yêu cầu 'description'`]
    },
    star: {
        type: Number,
        require: [true, `yêu cầu 'star'`]
    },
})

module.exports = schema