const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
  getProductoras,
  getProductoraById,
  createProductora,
  updateProductora,
  deleteProductora
} = require('../controllers/productoraController');

const router = Router();

router.get('/', getProductoras);

router.get('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], getProductoraById);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], createProductora);

router.put('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], updateProductora);

router.delete('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], deleteProductora);

module.exports = router;