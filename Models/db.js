const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI;


mongoose.connect(mongo_uri)
    .then(() => {
        console.log("MongoDb Connected...")
    }).catch((e) => {
        console.log("MongoDb Connection Error:", e)
    })
