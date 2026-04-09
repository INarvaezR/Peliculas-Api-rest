const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    // Recoge todos los posibles errores de la req y valida si está vacía.
    const errores = validationResult(req);
    
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }

    // Si no hay errores, delega la ejecución al siguiente paso (sea otro middleware o el controlador)
    next();
}

module.exports = {
    validarCampos
};
