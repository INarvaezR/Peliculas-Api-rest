const Tipo = require("../models/tipo");

/* Obtener tipos */
const getTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener tipos" });
    }
};

/* Obtener tipo por ID */
const getTipoById = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        res.json(tipo);
    } catch (error) {
        res.status(500).json({ msg: "Error al buscar tipo" });
    }
};

/* Crear tipo */
const createTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        await tipo.save();
        res.json(tipo);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear tipo" });
    }
};

/* Actualizar tipo */
const updateTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(tipo);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar tipo" });
    }
};

/* Eliminar tipo */
const deleteTipo = async (req, res) => {
    try {
        await Tipo.findByIdAndDelete(req.params.id);
        res.json({ msg: "Tipo eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar tipo" });
    }
};

module.exports = {
    getTipos,
    getTipoById,
    createTipo,
    updateTipo,
    deleteTipo
};