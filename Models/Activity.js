const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    title:String,
    descreption:String,
    location:String,
    datetime:Date
})

const ActivityModel = mongoose.model("Activity",ActivitySchema)

module.exports = ActivityModel