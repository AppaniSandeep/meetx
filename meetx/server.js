const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

const AuthRouter = require("./Routes/AuthRouter");
const Activity = require("./Routes/Activities");
const Bookings = require("./Routes/Bookings");

require("dotenv").config();
require("./Models/db");

const app = express()

app.use(express.json());

app.use(cors());

app.use("/auth", AuthRouter);
app.use("/api/activities", Activity);
app.use("/api/bookings", Bookings);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})