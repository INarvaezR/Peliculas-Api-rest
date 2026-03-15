const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema({

  nombre: {
    type: String,
    required: true
  },

  slogan: {
    type: String
  },

  descripcion: {
    type: String
  },

  estado: {
    type: String,
    enum: ['Activo','Inactivo'],
    default: 'Activo'
  },

  fechaCreacion: {
    type: Date,
    default: Date.now
  }

});

module.exports = model('Productora', ProductoraSchema);