const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  coins: Number,
  amount: Number,
  upiId: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Withdrawal", schema);