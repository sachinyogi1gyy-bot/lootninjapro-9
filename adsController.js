const Ad = require("../models/AdConfig");

exports.addAd = async (req, res) => {
  const ad = await Ad.create(req.body);
  res.json(ad);
};

exports.getAds = async (req, res) => {
  const ads = await Ad.find();
  res.json(ads);
};