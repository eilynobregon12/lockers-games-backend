const express = require("express")
const router = express.Router()
const controller = require("../controllers/juegoController")

router.get("/", controller.obtenerJuegos)
router.get("/:id", controller.obtenerJuegoPorId)
router.post("/", controller.crearJuego)
router.put("/:id", controller.actualizarJuego)
router.delete("/:id", controller.eliminarJuego)

module.exports = router