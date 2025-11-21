const express = require("express");
const router = express.Router();
const {
  crearResena,
  obtenerResenasPorJuego,
  editarResena,
  eliminarResena
} = require("../controllers/resenaController");


router.post("/", crearResena);


router.get("/:juegoId", obtenerResenasPorJuego);

router.put("/:id", editarResena);

router.delete("/:id", eliminarResena);

module.exports = router;