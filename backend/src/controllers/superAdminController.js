const generateToken = require(
  "../utils/generateToken"
);

const login = async (req, res) => {
  const { email, password } =
    req.body;

  if (
    email !==
      process.env.SUPER_ADMIN_EMAIL ||
    password !==
      process.env.SUPER_ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message:
        "Invalid Credentials",
    });
  }

  const token = generateToken({
    role: "SUPER_ADMIN",
  });

  res.json({
    success: true,
    token,
  });
};

module.exports = {
  login,
};