const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true },
  coins: { type: Number, default: 0 },
  deviceId: String,
  isBlocked: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);