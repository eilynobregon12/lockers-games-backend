const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
  texto: String,
  estrellas: Number,
  fecha: Date
});

module.exports = mongoose.model('Review', reviewSchema);
