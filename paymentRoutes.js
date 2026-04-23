const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { withdraw } = require("../controllers/paymentController");

router.post("/withdraw", auth, withdraw);

module.exports = router;