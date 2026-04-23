const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { earnCoin } = require("../controllers/userController");

router.post("/earn", auth, earnCoin);

module.exports = router;