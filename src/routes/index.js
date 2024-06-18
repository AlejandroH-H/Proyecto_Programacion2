const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.loggedin == true) {
    res.render('pages/pagePrincipal/home', {
      login: true,
      name: req.session.name
    });
  }else{
    res.render('pages/index');
  }
});

module.exports = router;
