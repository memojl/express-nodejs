const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
  res.render('index',{titulo: 'Mi titulo dinamico'});
});

router.get('/nosotros',(req, res)=>{
  res.render('nosotros',{titulo: 'Este es un mensaje dinamico de la pagina de nosotros'});
});

router.get('/servicios',(req, res)=>{
  res.render('servicios',{titulo: 'Este es un mensaje dinamico de la pagina de servicios'});
});

router.get('/contacto',(req, res)=>{
  res.render('contacto',{titulo: 'Este es un mensaje dinamico de la pagina de contacto'});
});

module.exports = router;