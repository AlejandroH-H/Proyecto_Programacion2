const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Express' });
});

router.get('/inicio', (req, res) => {
  res.render('pages/inicioDeSesion', { title: 'Express' });
});

router.get('/TerminosCondiciones', (req, res) => {
  res.render('pages/terminos', { title: 'Express' });
});


module.exports = router;
