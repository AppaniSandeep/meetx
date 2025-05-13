const express = require("express");
const auth = require("../Middlewares/Auth");
const {bookActivity,getMyBookings} = require("../Controllers/BookingController");

const router = express.Router();
router.post("/", auth, bookActivity);
router.get("/", auth, getMyBookings);

module.exports = router;
