const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('Primero que todo, wenas noches')
});

module.exports= router;