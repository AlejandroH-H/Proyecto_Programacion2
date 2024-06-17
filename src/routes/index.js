const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index');
});


router.get('/datos',(req,res)=>{
  res.render('pages/datos');
})
router.get('/preEleccion',(req,res)=>{
  res.render('pages/preEleccionMateria');
})



module.exports = router;
