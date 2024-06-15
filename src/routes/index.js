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

router.get('/home', (req, res) => {
  res.render('pages/home', { title: 'Express' });
});
router.get('/datos',(req,res)=>{
  res.render('pages/datos', { title: 'Express' });
})
router.get('/preEleccion',(req,res)=>{
  res.render('pages/preEleccionMateria', { title: 'Express' });
})



module.exports = router;
