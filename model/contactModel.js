const mongoose = require('mongoose')
const {Schema} = mongoose
const contactSchema = new Schema ({
    address: String,
    phone: String,
    email: String,
})

module.exports = mongoose.model("Contact", contactSchema)