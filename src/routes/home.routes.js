const { Router } = require('express');

const router = Router();

router.get('/home', (req, res) => {
    if (req.session.loggedin) {
      res.render('pages/home', {
        login: true,
        name: req.session.name
      });
    }else{
      res.render('pages/inicioDeSesion')
    }
});

router.get('/datos',(req,res)=>{
  res.render('pages/datos');
})

router.get('/preEleccion',(req,res)=>{
  res.render('pages/preEleccionMateria');
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
});

module.exports = router;