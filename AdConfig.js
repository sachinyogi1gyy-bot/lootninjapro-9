const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  platform: String,
  appId: String,
  placementId: String,
  script: String
});

module.exports = mongoose.model("AdConfig", schema);