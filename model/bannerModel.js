const mongoose = require('mongoose');
const { Schema } = mongoose

const bannerSchema = new Schema({
    subHeading: String,
    heading: String,
    paragraph: String,
    buttonText: String,
    buttonShow: Boolean,
    image:String,
    circuleShow: Boolean
})

module.exports = mongoose.model("Banner", bannerSchema)