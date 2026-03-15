const Media = require("../models/media");

/* Obtener todas las medias */
const getMedias = async (req, res) => {
    try {
        const medias = await Media.find();
        res.json(medias);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener medias" });
    }
};

/* Obtener media por ID */
const getMediaById = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        res.json(media);
    } catch (error) {
        res.status(500).json({ msg: "Error al buscar la media" });
    }
};

/* Crear media */
const createMedia = async (req, res) => {
    try {
        const media = new Media(req.body);
        await media.save();
        res.json(media);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear media" });
    }
};

/* Actualizar media */
const updateMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(media);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar media" });
    }
};

/* Eliminar media */
const deleteMedia = async (req, res) => {
    try {
        await Media.findByIdAndDelete(req.params.id);
        res.json({ msg: "Media eliminada" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar media" });
    }
};

module.exports = {
    getMedias,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia
};