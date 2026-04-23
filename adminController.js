const User = require("../models/User");
const Withdrawal = require("../models/Withdrawal");

exports.dashboard = async (req, res) => {
  const users = await User.countDocuments();
  const withdrawals = await Withdrawal.countDocuments();

  res.json({ users, withdrawals });
};