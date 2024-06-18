const { Router } = require('express');

const router = Router();

router.get('/home', (req, res) => {
    if (req.session.loggedin == true) {
      res.render('pages/home', {
        login: true,
        name: req.session.name
      });
    }else{
      res.redirect('/session');
    }
});

router.get('/datos',(req,res)=>{
  if(req.session.loggedin == true) {
    res.render('pages/datos', {
      login: true,
      name: req.session.name
    });
  }else{
    res.redirect('/session');
  }
})

router.get('/preEleccion',(req,res)=>{
  if (req.session.loggedin == true) {
    res.render('pages/preEleccionMateria', {
      login: true,
      name: req.session.name
    });
  }else{
    res.redirect('/session');
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
});

module.exports = router;