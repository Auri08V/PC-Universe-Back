const { Componentes, Perifericos } = require("../../db");
const { Op } = require("sequelize");

const getDataByName = async (req, res) => {
  const { name } = req.query;
  try {
    const componentes = await Componentes.findAll({
      where: {
        modelo: { [Op.iLike]: `%${name}%` },
      },
    });
    const perifericos = await Perifericos.findAll({
      where: {
        modelo: { [Op.iLike]: `%${name}%` },
      },
    });
    const results = [...componentes, ...perifericos];

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDataByName };
