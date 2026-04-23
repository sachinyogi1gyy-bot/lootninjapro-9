let hits = {};

module.exports = (req, res, next) => {
  const ip = req.ip;

  hits[ip] = (hits[ip] || 0) + 1;

  if (hits[ip] > 100) {
    return res.status(429).json({ msg: "Too many requests" });
  }

  next();
};