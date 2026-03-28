const Director = require("../models/director");

/* Obtener todos los directores */
const getDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.json(directores);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener directores" });
    }
};

/* Obtener director por ID */
const getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        res.json(director);
    } catch (error) {
        res.status(500).json({ msg: "Error al buscar director" });
    }
};

/* Crear director */
const createDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.json(director);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear director" });
    }
};

/* Actualizar director */
const updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(director);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar director" });
    }
};

/* Eliminar director */
const deleteDirector = async (req, res) => {
    try {
        await Director.findByIdAndDelete(req.params.id);
        res.json({ msg: "Director eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar director" });
    }
};

module.exports = {
    getDirectores,
    getDirectorById,
    createDirector,
    updateDirector,
    deleteDirector
};