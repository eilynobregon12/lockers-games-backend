const Resena = require('../models/Resena');

// Crear reseña
exports.crearResena = async (req, res) => {
  try {
    const nueva = new Resena(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la reseña",
      detalles: error.message
    });
  }
};

// Obtener reseñas por juego (ID)
exports.obtenerResenas = async (req, res) => {
  try {
    const filtro = req.query.juegoId ? { juego: req.query.juegoId } : {};
    const resenas = await Resena.find(filtro).populate("juego", "nombre");
    res.status(200).json(resenas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
  }
};

// Obtener una reseña
exports.obtenerResenaPorId = async (req, res) => {
  try {
    const resena = await Resena.findById(req.params.id).populate("juego", "nombre");
    if (!resena) return res.status(404).json({ msg: "Reseña no encontrada" });
    res.status(200).json(resena);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la reseña" });
  }
};

// Actualizar
exports.actualizarResena = async (req, res) => {
  try {
    const actualizada = await Resena.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!actualizada) {
      return res.status(404).json({ error: "Reseña no encontrada" });
    }

    res.status(200).json(actualizada);
  } catch (error) {
    res.status(400).json({
      error: "Error al actualizar la reseña",
      detalle: error.message
    });
  }
};

// Eliminar
exports.eliminarResena = async (req, res) => {
  try {
    const borrada = await Resena.findByIdAndDelete(req.params.id);
    if (!borrada) return res.status(404).json({ msg: "Reseña no encontrada" });

    res.status(200).json({ msg: "Reseña eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la reseña" });
  }
};
