const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { mobile } = req.body;

  let user = await User.findOne({ mobile });

  if (!user) {
    user = await User.create({ mobile });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ user, token });
};