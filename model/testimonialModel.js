const mongoose = require('mongoose')
const { Schema } = mongoose

const testimonialSchema = new Schema ({
    heading: String,
    title: String,
    description: String,
    image: String,
    showImage: Boolean,
})

module.exports = mongoose.model("Testimonial", testimonialSchema)