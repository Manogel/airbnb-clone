const axios = require("axios");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  },

  async index(req, res) {
    try {
      return res.json({ ok: true });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro na conexão com o banco de dados!" });
    }
  }
};
