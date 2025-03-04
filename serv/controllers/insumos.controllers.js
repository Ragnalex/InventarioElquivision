const pool = require("../database");

const getInsumos = async (req, res) => {

  try {
    const response = await pool.query("SELECT * FROM InventarioInsumos INNER JOIN Insumo ON InventarioInsumos.id_insumo = Insumo.id_insumo")
    res.status(200).json(response.rows)
  }
  catch{
    res.status(500).json(error)
  }

}

module.exports = {
  getInsumos
}