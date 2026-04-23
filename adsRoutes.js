const router = require("express").Router();
const { addAd, getAds } = require("../controllers/adsController");

router.post("/add", addAd);
router.get("/", getAds);

module.exports = router;