const express = require("express");
const router = express.Router();

// Mock data for activities
let activities = [];

// Create a new activity
router.post("/", (req, res) => {
    const { name, description } = req.body;
    const newActivity = { id: activities.length + 1, name, description };
    activities.push(newActivity);
    res.status(201).json(newActivity);
});

// Retrieve all activities
router.get("/", (req, res) => {
    res.json(activities);
});

// Retrieve a specific activity by ID
router.get("/:id", (req, res) => {
    const activity = activities.find(a => a.id === parseInt(req.params.id));
    if (!activity) return res.status(404).send("Activity not found.");
    res.json(activity);
});

// Update an activity by ID
router.put("/:id", (req, res) => {
    const activity = activities.find(a => a.id === parseInt(req.params.id));
    if (!activity) return res.status(404).send("Activity not found.");

    const { name, description } = req.body;
    activity.name = name;
    activity.description = description;
    res.json(activity);
});

// Delete an activity by ID
router.delete("/:id", (req, res) => {
    const activityIndex = activities.findIndex(a => a.id === parseInt(req.params.id));
    if (activityIndex === -1) return res.status(404).send("Activity not found.");

    activities.splice(activityIndex, 1);
    res.status(204).send();
});

module.exports = router;