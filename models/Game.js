const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  titulo: String,
  portada: String,
  genero: String,
  horasJugadas: Number,
  completado: Boolean,
  puntuacion: Number
});

module.exports = mongoose.model('Game', gameSchema);
