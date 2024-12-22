const mongoose = require('mongoose')
const {Schema} = mongoose
const blogSchema = new Schema ({
    date: String,
    description: String,
    image: String,
})

module.exports = mongoose.model('Blog', blogSchema)