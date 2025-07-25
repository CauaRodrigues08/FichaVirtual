const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');

router.get('/', (req, res) => {
  res.render('criar', {
    title: 'Criar ficha',
    styles: ['/stylesheets/style.css'],
    scripts: [
      '/javascripts/hp.js',
      '/javascripts/mp.js', 
      '/javascripts/sanidade.js', 
      '/javascripts/skills.js'
    ]
  });
});

router.post('/', async (req, res) => {
  try {
    const novaFicha = new Sheet(req.body);
    await novaFicha.save();
    res.status(201).send();
  } catch (err) {
    console.error('Erro ao salvar ficha:', err);
    res.status(500).send('Erro ao salvar ficha: ' + err);
  }
});

module.exports = router;