const Resena = require("../models/Resena");


exports.crearResena = async (req, res) => {
  try {
    const { juegoId, usuario, comentario, estrellas } = req.body;

    if (!juegoId || !usuario || !comentario || estrellas == null) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const nueva = await Resena.create({ juegoId, usuario, comentario, estrellas });
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ message: "Error al crear reseña" });
  }
};


exports.obtenerResenasPorJuego = async (req, res) => {
  try {
    const { juegoId } = req.params;
    const resenas = await Resena.find({ juegoId });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener reseñas" });
  }
};


exports.editarResena = async (req, res) => {
  try {
    const { id } = req.params;
    const actualizada = await Resena.findByIdAndUpdate(id, req.body, { new: true });

    if (!actualizada) {
      return res.status(404).json({ message: "Reseña no encontrada" });
    }

    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al editar reseña" });
  }
};


exports.eliminarResena = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminada = await Resena.findByIdAndDelete(id);

    if (!eliminada) {
      return res.status(404).json({ message: "Reseña no encontrada" });
    }

    res.json({ message: "Reseña eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar reseña" });
  }
};