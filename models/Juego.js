const mongoose = require("mongoose")

const JuegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  historia: { type: String },
  link: { type: String },
  estado: { type: String, enum: ["pendiente", "jugando", "completado"] },
  horasJugadas: { type: Number, default: 0 }
})

module.exports = mongoose.model("Juego", JuegoSchema)