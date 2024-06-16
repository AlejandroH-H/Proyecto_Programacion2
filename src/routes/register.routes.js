const { Router } = require('express');
const { getRegister, postRegister ,terminosCond } = require('../controllers/register.controller');

const router = Router();

router.get('/register', getRegister);

router.post('/register', postRegister);

router.get('/register/terminos_Condiciones', terminosCond);

module.exports = router;