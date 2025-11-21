const Juego = require("../models/Juego")

exports.crearJuego = async (req, res) => {
  try {
    const juego = new Juego({
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen,
      historia: req.body.historia,
      estado: req.body.estado,
      horasJugadas: req.body.horasJugadas
    })

    const guardado = await juego.save()
    res.status(201).json(guardado)
  } catch (error) {
    res.status(500).json({ error: "Error al crear juego" })
  }
}

exports.obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find()
    res.json(juegos)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener juegos" })
  }
}

exports.obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id)
    if (!juego) return res.status(404).json({ error: "Juego no encontrado" })
    res.json(juego)
  } catch (error) {
    res.status(500).json({ error: "Error al buscar juego" })
  }
}

exports.actualizarJuego = async (req, res) => {
  try {
    const actualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        historia: req.body.historia,
        estado: req.body.estado,
        horasJugadas: req.body.horasJugadas
      },
      { new: true }
    )

    if (!actualizado) return res.status(404).json({ error: "Juego no encontrado" })
    res.json(actualizado)
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar juego" })
  }
}

exports.eliminarJuego = async (req, res) => {
  try {
    const eliminado = await Juego.findByIdAndDelete(req.params.id)
    if (!eliminado) return res.status(404).json({ error: "Juego no encontrado" })
    res.json({ message: "Juego eliminado" })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar juego" })
  }
}