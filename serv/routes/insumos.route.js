const { Router } = require("express");
const router = Router();
const {
    getInsumos,
} = require("../controllers/insumos.controllers");
//Manejo de insumos
router.get("/data", getInsumos);

module.exports = router;