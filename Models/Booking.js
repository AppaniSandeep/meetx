const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    user:{type:Schema.Types.ObjectId, ref:"Userss"},
    activity:{type:Schema.Types.ObjectId, ref:"Activity"}
})

const BookingModel = mongoose.model("Booking",BookingSchema);

module.exports = BookingModel