const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },
  usuario: { type: String, required: true },
  comentario: { type: String, required: true },
  estrellas: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Resena", ResenaSchema);