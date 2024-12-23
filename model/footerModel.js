const mongoose = require('mongoose')
const {Schema} = mongoose
const footerSchema = new Schema({
    phone: String,
    address: String,
    explore: String,
    email: String,
    description: String,
    service: String, 
})

module.exports = mongoose.model('Footer', footerSchema)