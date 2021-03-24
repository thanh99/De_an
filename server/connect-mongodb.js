const mongoose = require("mongoose")

const mongooseString = 'mongodb+srv://nguyenanhtuan:anhtuanqwe@cluster0-vud3p.mongodb.net/REVIEW?retryWrites=true&w=majority'

mongoose.connect(mongooseString, {
    // optionsn
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connect success to mongo atlas!")
})
.catch((err) => {
    console.error("connect failed to mongo atlas")
    console.error(err.message)
})
