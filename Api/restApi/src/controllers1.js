const signinData = (req, res) => {
  return res.json([{ name: "sign" }]);
};

const loginData = (req, res) => {
  return res.json({ name: "login" });
};

module.exports = { signinData, loginData };
