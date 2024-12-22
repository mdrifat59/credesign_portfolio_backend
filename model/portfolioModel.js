const mongoose = require('mongoose')
const { Schema } = mongoose

const portfolioSchema = new Schema({ 
    image:String,
})

module.exports = mongoose.model("Portfolio", portfolioSchema)