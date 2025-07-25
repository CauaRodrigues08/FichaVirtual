const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');
const { checkboxPaths, setMissingCheckboxes } = require('../utils/checkboxPaths');

router.get('/', (req, res) => {
  res.render('criar', {
    title: 'Criar ficha',
    styles: ['/stylesheets/style.css'],
    scripts: [
      '/javascripts/hp.js',
      '/javascripts/mp.js', 
      '/javascripts/sanidade.js', 
      '/javascripts/skills.js'
    ],
    formAction: '/criar',
    sheet: null
  });
});

router.post('/', async (req, res) => {
  setMissingCheckboxes(req.body, checkboxPaths);

  try {
    const novaFicha = new Sheet(req.body);
    await novaFicha.save();
    const sheetId = novaFicha._id;
    res.redirect(`/fichas/${sheetId}`);
  } catch (err) {
    console.error('Erro ao salvar ficha:', err);
    res.status(500).send('Erro ao salvar ficha: ' + err);
  }
});


module.exports = router;