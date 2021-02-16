const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // const cookies = req.cookies(user);
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // adding user id to request
    verified.user = req.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
