const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subscriberToChannel: { type: String, required: true },
    subscriberDate: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("subscribers", subscriberSchema);