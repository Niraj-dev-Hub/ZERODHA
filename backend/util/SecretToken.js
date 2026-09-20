require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.TOKEN_KEY || "zerodha_secret_key";

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};