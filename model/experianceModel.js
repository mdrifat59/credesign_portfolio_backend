const mongoose = require('mongoose');
const { Schema } = mongoose

const experianceSchema = new Schema({
    expHeading: String,
    expTitle: String,
    expDes: String,
})

module.exports = mongoose.model("Experiance", experianceSchema)