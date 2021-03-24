const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'address'!`]
    },
    image: {
        type: String,
        required: [true, `Yêu cầu 'image'!`]
    },
    description: {
        type: String,
        require: [true, `yêu cầu 'description'`]
    },
})

module.exports = schema