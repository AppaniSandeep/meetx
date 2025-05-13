const Booking = require("../Models/Booking");
const Activity = require("../Models/Activity");

const bookActivity = async (req,res) => {
    const userId = req.user.id;
    const {activityId} = req.body;

    try {
        const activity = await Activity.findById(activityId);
        if (!activity) {
            return res.status(404).json({ error: "Activity not found" })
        }
        const booking = await Booking.create({ user: userId, activity: activityId });
    res.status(201).json({ message: "Activity booked", booking });


    } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
}

const getMyBookings = async (req,res) => {
    const bookings = await Booking.find({user:req.user.id}).populate("activity");
    res.json(bookings)
}

module.exports = {bookActivity,getMyBookings}