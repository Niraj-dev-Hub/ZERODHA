const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Zerodha backend is running",
    endpoints: {
      signup: "POST /signup",
      login: "POST /login",
      verify: "POST /"
    }
  });
});

router.get("/login", (req, res) => {
  res.status(200).json({
    message: "Use POST /login with email and password to authenticate.",
    example: {
      email: "user@example.com",
      password: "yourPassword"
    }
  });
});

router.get("/signup", (req, res) => {
  res.status(200).json({
    message: "Use POST /signup with username, email, and password to create an account."
  });
});

router.post('/', userVerification);
router.post('/verify', userVerification);
router.get('/verify', userVerification);
router.post("/signup", Signup);
router.post('/login', Login);

module.exports = router;




