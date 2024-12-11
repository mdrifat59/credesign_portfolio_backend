const mongoose = require('mongoose');
const { Schema } = mongoose

const educationSchema = new Schema({
    eduHeading: String,
    eduTitle: String,
    eduDes: String,
})

module.exports = mongoose.model("Education", educationSchema)