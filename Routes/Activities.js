const express = require("express");
const { listActivities } = require("../Controllers/ActivityController");

const router = express.Router();
router.get("/", listActivities);

module.exports = router;
