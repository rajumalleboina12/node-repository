const usersData = (req, res) => {
  return res.json([{ name: "raju" }]);
};

const friendsData = (req, res) => {
  return res.json({ name: "syama" });
};

module.exports = { usersData, friendsData };
