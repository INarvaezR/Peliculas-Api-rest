const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
  getTipos,
  getTipoById,
  createTipo,
  updateTipo,
  deleteTipo
} = require('../controllers/tipoController');

const router = Router();

router.get('/', getTipos);

router.get('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], getTipoById);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  validarCampos
], createTipo);

router.put('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  validarCampos
], updateTipo);

router.delete('/:id', [
  check('id', 'El ID no es válido').isMongoId(),
  validarCampos
], deleteTipo);

module.exports = router;