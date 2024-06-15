const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index')
});

router.get('/inicio', (req, res) => {
  res.render('pages/inicioDeSesion')
});

router.get('/TerminosCondiciones', (req, res) => {
  res.render('pages/terminos')
});

router.get('/home', (req, res) => {
  res.render('pages/home')
});
router.get('/datos',(req,res)=>{
  res.render('pages/datos')
})
router.get('/preEleccion',(req,res)=>{
  res.render('pages/preEleccionMateria')
})



module.exports = router;
