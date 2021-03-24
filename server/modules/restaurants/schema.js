const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'price'!`]
    },
    image: {
        type: String,
        required: [true, `Yêu cầu 'image'!`]
    },
    description: {
        type: String,
        require: [true, `yêu cầu 'description'`]
    },
    star: {
        type: Number,
        require: [true, `yêu cầu 'star'`]
    },
    category: {
        type: String,
        require: [true, `yêu cầu 'category'`]
    }
})

module.exports = schema