const mongoose = require('mongoose');
const { Schema } = mongoose

const softskillSchema = new Schema({
    sofHeading: String,
    sofTitle: String,
    sofDes: String,
})

module.exports = mongoose.model("SoftSkill", softskillSchema)