const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true,
  },
  subscriberToChannel: {
    type: String,
    requred: true,
  },
  subscribeDate: {
    type: Date,
    requred: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
