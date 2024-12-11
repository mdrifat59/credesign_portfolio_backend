const mongoose = require('mongoose')
const { Schema } = mongoose

const resumeSchema = new Schema ({
    title: String,
    heading: String,
    showCircule: Boolean,
    
    sofHeading: String,
    sofTitle: String,
    sofDes: String,
    expHeading: String,
    expTitle: String,
    expDes: String,
})

module.exports = mongoose.model("Resume", resumeSchema)