const mongoose = require('mongoose')
const {Schema} = mongoose
const partnerSchema = new Schema({
    image: String,
})

module.exports = mongoose.model('Partner', partnerSchema)