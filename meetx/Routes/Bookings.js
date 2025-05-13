const express = require("express");
const router = express.Router();

// Mock data for bookings
let bookings = [];

// Create a new booking
router.post("/", (req, res) => {
    const { userId, activityId, date } = req.body;
    const newBooking = { id: bookings.length + 1, userId, activityId, date };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Retrieve all bookings
router.get("/", (req, res) => {
    res.json(bookings);
});

// Retrieve a specific booking by ID
router.get("/:id", (req, res) => {
    const booking = bookings.find(b => b.id === parseInt(req.params.id));
    if (!booking) return res.status(404).send("Booking not found.");
    res.json(booking);
});

// Update a booking by ID
router.put("/:id", (req, res) => {
    const booking = bookings.find(b => b.id === parseInt(req.params.id));
    if (!booking) return res.status(404).send("Booking not found.");

    const { userId, activityId, date } = req.body;
    booking.userId = userId;
    booking.activityId = activityId;
    booking.date = date;

    res.json(booking);
});

// Delete a booking by ID
router.delete("/:id", (req, res) => {
    const bookingIndex = bookings.findIndex(b => b.id === parseInt(req.params.id));
    if (bookingIndex === -1) return res.status(404).send("Booking not found.");

    bookings.splice(bookingIndex, 1);
    res.status(204).send();
});

module.exports = router;