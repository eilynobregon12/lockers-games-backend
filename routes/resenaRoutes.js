const express = require("express")
const router = express.Router()
const controller = require("../controllers/resenaController")

router.post("/", controller.crearResena)
router.get("/", controller.obtenerResenas)
router.get("/:id", controller.obtenerResenaPorId)
router.put("/:id", controller.actualizarResena)
router.delete("/:id", controller.eliminarResena)

module.exports = router