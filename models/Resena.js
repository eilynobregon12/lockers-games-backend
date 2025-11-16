const mongoose = require("mongoose")

const ResenaSchema = new mongoose.Schema({
  juegoId: { type: String, required: true },
  autor: { type: String, required: true },
  comentario: { type: String, required: true },
  estrellas: { type: Number, min: 1, max: 5 }
})

module.exports = mongoose.model("Resena", ResenaSchema)