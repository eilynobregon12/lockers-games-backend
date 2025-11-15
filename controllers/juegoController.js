const Juego = require('../models/Juego');

exports.crearJuego = async (req, res) => {
    try {
        const nuevoJuego = new Juego(req.body);
        await nuevoJuego.save();
        res.status(201).json(nuevoJuego);
    } catch (error) {
        res.status(400).json({
            error: 'Error al crear el juego. Verifique campos',
            details: error.message
        });
    }
};

exports.obtenerJuegos = async (req, res) => {
    try {
        const juegos = await Juego.find();
        res.status(200).json(juegos);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor al obtener juegos' });
    }
};

exports.obtenerJuegoPorId = async (req, res) => {
    try {
        const juego = await Juego.findById(req.params.id);
        if (!juego) {
            return res.status(404).json({ msg: 'Juego no encontrado' });
        }
        res.status(200).json(juego);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar juego' });
    }
};

exports.actualizarJuego = async (req, res) => {
    try {
        const juego = await Juego.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!juego) {
            return res.status(404).json({ msg: 'Juego no encontrado para actualizar' });
        }

        res.status(200).json(juego);
    } catch (error) {
        res.status(400).json({
            error: 'Error al actualizar el juego',
            details: error.message
        });
    }
};

exports.eliminarJuego = async (req, res) => {
    try {
        const juego = await Juego.findByIdAndDelete(req.params.id);

        if (!juego) {
            return res.status(404).json({ msg: 'Juego no encontrado para eliminar' });
        }

        res.status(200).json({ msg: 'Juego eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el juego' });
    }
};