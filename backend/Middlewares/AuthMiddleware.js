const {UserModel} = require("../model/UserSchemaModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getToken = (req) => {
  if (req.cookies && req.cookies.token) return req.cookies.token;

  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  const customToken = req.headers["x-auth-token"];
  return customToken || null;
};

module.exports.userVerification = (req, res) => {
  const token = getToken(req);

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await UserModel.findById(data.id);
    if (user) return res.json({ status: true, user: user.username });
    return res.json({ status: false });
  });
};