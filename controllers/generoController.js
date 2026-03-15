const Genero = require('../models/genero');
const { request, response } = require('express');

const getGeneros = async (req = request, res = response) => {
    try {
        const generos = await Genero.find();
        res.status(200).json(generos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener géneros' });
    }
};

const getGeneroById = async (req = request, res = response) => {
    try {
        const { id } = req.params;

        const genero = await Genero.findById(id);

        if (!genero) {
            return res.status(404).json({ msg: "Género no encontrado" });
        }

        res.status(200).json(genero);

    } catch (error) {
        res.status(500).json({ msg: "Error al buscar género" });
    }
};

const createGenero = async (req = request, res = response) => {
    try {

        const { nombre, descripcion } = req.body;

        const generoDB = await Genero.findOne({ nombre });

        if (generoDB) {
            return res.status(400).json({
                msg: `El género ${nombre} ya existe`
            });
        }

        const genero = new Genero({ nombre, descripcion });

        await genero.save();

        res.status(201).json(genero);

    } catch (error) {
        res.status(500).json({ msg: "Error al crear género" });
    }
};

const updateGenero = async (req = request, res = response) => {
    try {

        const { id } = req.params;

        const genero = await Genero.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json(genero);

    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar género" });
    }
};

const deleteGenero = async (req = request, res = response) => {
    try {

        const { id } = req.params;

        await Genero.findByIdAndDelete(id);

        res.status(200).json({
            msg: "Género eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar género" });
    }
};

module.exports = {
    getGeneros,
    getGeneroById,
    createGenero,
    updateGenero,
    deleteGenero
};