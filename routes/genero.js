const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
  getGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  deleteGenero
} = require('../controllers/generoController');

const router = Router();

router.get('/', getGeneros);

router.get('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], getGeneroById);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado es obligatorio y debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], createGenero);

router.put('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado es obligatorio y debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], updateGenero);

router.delete('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], deleteGenero);

module.exports = router;