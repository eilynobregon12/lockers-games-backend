const Resena = require("../models/Resena")

const crearResena = async (req, res) => {
  try {
    const nueva = await Resena.create({
      juegoId: req.body.juegoId,
      autor: req.body.autor,
      comentario: req.body.comentario
    })
    res.json(nueva)
  } catch (error) {
    res.status(500).json({ error: "Error al crear la reseña" })
  }
}

const obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.find()
    res.json(resenas)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas" })
  }
}

const obtenerResenaPorId = async (req, res) => {
  try {
    const resena = await Resena.findById(req.params.id)
    if (!resena) return res.status(404).json({ error: "Reseña no encontrada" })
    res.json(resena)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la reseña" })
  }
}

const actualizarResena = async (req, res) => {
  try {
    const actualizada = await Resena.findByIdAndUpdate(
      req.params.id,
      {
        juegoId: req.body.juegoId,
        autor: req.body.autor,
        comentario: req.body.comentario
      },
      { new: true }
    )
    res.json(actualizada)
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la reseña" })
  }
}

const eliminarResena = async (req, res) => {
  try {
    await Resena.findByIdAndDelete(req.params.id)
    res.json({ mensaje: "Reseña eliminada" })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la reseña" })
  }
}

module.exports = {
  crearResena,
  obtenerResenas,
  obtenerResenaPorId,
  actualizarResena,
  eliminarResena
}