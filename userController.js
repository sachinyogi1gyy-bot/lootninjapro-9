const User = require("../models/User");

exports.earnCoin = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.coins += 1;

  await user.save();

  res.json({ coins: user.coins });
};