const { Router } = require('express');
const { getRegister, postRegisterStudent ,terminosCond } = require('../../controllers/sesiones/register.controller');

const router = Router();

router.get('/register', getRegister);

router.post('/register', postRegisterStudent);

router.get('/register/terminos_Condiciones', terminosCond);

module.exports = router;