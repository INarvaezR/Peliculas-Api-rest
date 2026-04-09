const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
  getMedias,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia
} = require('../controllers/mediaController');

const router = Router();

router.get('/', getMedias);

router.get('/:id', [
  check('id', 'El ID proporcionado no es un ID válido').isMongoId(),
  validarCampos
], getMediaById);

router.post('/', [
  check('serial', 'El serial es obligatorio').not().isEmpty(),
  check('titulo', 'El titulo es obligatorio').not().isEmpty(),
  check('url', 'La URL es obligatoria').not().isEmpty(),
  check('genero', 'El id del género no es válido').isMongoId(),
  check('director', 'El id del director no es válido').isMongoId(),
  check('productora', 'El id de la productora no es válido').isMongoId(),
  check('tipo', 'El id del tipo no es válido').isMongoId(),
  validarCampos
], createMedia);

router.put('/:id', [
  check('id', 'El ID proporcionado no es un ID válido').isMongoId(),
  check('serial', 'El serial es obligatorio').not().isEmpty(),
  check('titulo', 'El titulo es obligatorio').not().isEmpty(),
  check('url', 'La URL es obligatoria').not().isEmpty(),
  check('genero', 'El id del género no es válido').isMongoId(),
  check('director', 'El id del director no es válido').isMongoId(),
  check('productora', 'El id de la productora no es válido').isMongoId(),
  check('tipo', 'El id del tipo no es válido').isMongoId(),
  validarCampos
], updateMedia);

router.delete('/:id', [
  check('id', 'El ID proporcionado no es un ID válido').isMongoId(),
  validarCampos
], deleteMedia);

module.exports = router;