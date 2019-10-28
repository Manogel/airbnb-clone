const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { filename: thumbnail } = req.file;
    const { company, techs, price } = req.body;
    const { user_id: user } = req.headers;

    const isExists = User.findById(user);
    if (!isExists) {
      return res.status(400).json({ error: "User is not exists!" });
    }

    const spot = await Spot.create({
      user,
      thumbnail,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);
  },

  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  }
};
