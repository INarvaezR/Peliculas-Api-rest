const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
  getDirectores,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector
} = require('../controllers/directorController');

const router = Router();

router.get('/', getDirectores);

router.get('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], getDirectorById);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], createDirector);

router.put('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('estado', 'El estado debe ser Activo o Inactivo').optional().isIn(['Activo', 'Inactivo']),
  validarCampos
], updateDirector);

router.delete('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], deleteDirector);

module.exports = router;