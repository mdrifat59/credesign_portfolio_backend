const mongoogs = require ('mongoose')
const { Schema } = mongoogs

const serviceSchema = new Schema ({
    image: String,
    title: String,
    subTitle: String,
    showImage: Boolean,
})

module.exports = mongoogs.model("Service", serviceSchema)