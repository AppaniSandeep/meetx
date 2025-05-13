const Activity = require("../Models/Activity");

const listActivities = async (req,res) => {
    const activities = await Activity.find({});
    res.json(activities)
}

module.exports = {listActivities}