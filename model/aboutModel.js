const mongoose = require('mongoose');
const { Schema } = mongoose;

const  aboutSchema = new Schema({
    subHeading: String,
    heading: String,
    paragraph: String,
    buttonText: String,
    buttonShow: Boolean,
    image:String,
    circuleShow: Boolean,
    title_1: String,
    title_2: String,
    bagTitle_1: String,
    bagTitle_2: String,
    bagNumber_1: String,
    bagNumber_2: String,
})

module.exports = mongoose.model("About", aboutSchema)