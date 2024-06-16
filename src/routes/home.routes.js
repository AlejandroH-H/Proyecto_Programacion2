const { Router } = require('express');

const router = Router();

router.get('/home', (req, res) => {
    res.render('pages/home');
});

router.get('/datos',(req,res)=>{
  res.render('pages/datos');
})

router.get('/preEleccion',(req,res)=>{
  res.render('pages/preEleccionMateria');
})

module.exports = router;