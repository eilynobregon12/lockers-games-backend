const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);