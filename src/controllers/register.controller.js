const { pool } = require('../db');

const getRegister = (req, res) => {
    res.render('pages/register');
};

const postRegister = (req, res) => {
    console.log(req.body);
    res.redirect('/');
}

const terminosCond = (req, res) => {
    res.render('pages/terminos');
}

module.exports = {
    getRegister,
    postRegister,
    terminosCond
}