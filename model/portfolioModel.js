const mongoose = require('mongoose')
const { Schema } = mongoose

const portfolioSchema = new Schema({
    // title: String,
    // heading: String,
    // showCircule: Boolean,
    image:String,
})

module.exports = mongoose.model("Portfolio", portfolioSchema)