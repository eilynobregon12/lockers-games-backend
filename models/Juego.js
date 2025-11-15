const mongoose = require('mongoose');

const JuegoSCHEMA = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    categoria: {
        type: String,
        required: true
    },
    portadaURL: {
        type: String
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'jugando', 'completado'],
        default: 'pendiente'
    },
    horasJugadas: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Juego', JuegoSCHEMA);