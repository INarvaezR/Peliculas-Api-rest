const { Schema, model } = require('mongoose');

const DirectorSchema = Schema({

  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },

  estado: {
    type: String,
    enum: ['Activo', 'Inactivo'],
    default: 'Activo'
  },

  fechaCreacion: {
    type: Date,
    default: Date.now
  },

  fechaActualizacion: {
    type: Date,
    default: Date.now
  }

});

module.exports = model('Director', DirectorSchema);