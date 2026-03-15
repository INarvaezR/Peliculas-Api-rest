const Productora = require("../models/productora");

/* Obtener productoras */
const getProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener productoras" });
    }
};

/* Obtener productora por ID */
const getProductoraById = async (req, res) => {
    try {
        const productora = await Productora.findById(req.params.id);
        res.json(productora);
    } catch (error) {
        res.status(500).json({ msg: "Error al buscar productora" });
    }
};

/* Crear productora */
const createProductora = async (req, res) => {
    try {
        const productora = new Productora(req.body);
        await productora.save();
        res.json(productora);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear productora" });
    }
};

/* Actualizar productora */
const updateProductora = async (req, res) => {
    try {
        const productora = await Productora.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(productora);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar productora" });
    }
};

/* Eliminar productora */
const deleteProductora = async (req, res) => {
    try {
        await Productora.findByIdAndDelete(req.params.id);
        res.json({ msg: "Productora eliminada" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar productora" });
    }
};

module.exports = {
    getProductoras,
    getProductoraById,
    createProductora,
    updateProductora,
    deleteProductora
};