const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');
const { checkboxPaths, setMissingCheckboxes } = require('../utils/checkboxPaths');
const flat = require('flat');

// Função para normalizar booleanos (true/false)
function normalizeBooleans(obj) {
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    if (Array.isArray(val)) {
      obj[key] = val[val.length - 1];
    } else if (val !== null && typeof val === 'object') {
      normalizeBooleans(val);
    } else if (val === 'true' || val === 'false') {
      obj[key] = val === 'true';
    }
  });
}

// Rota GET para renderizar o formulário de criação
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

// Rota POST para salvar nova ficha
router.post('/', async (req, res) => {
  setMissingCheckboxes(req.body, checkboxPaths);
  normalizeBooleans(req.body);

  try {
    // Se quiser usar estrutura plana:
    const flattenedBody = flat.flatten(req.body);
    const novaFicha = new Sheet(flattenedBody);

    await novaFicha.save();
    const sheetId = novaFicha._id;
    res.redirect(`/fichas/${sheetId}`);
  } catch (err) {
    console.error('Erro ao salvar ficha:', err);
    res.status(500).send('Erro ao salvar ficha: ' + err.message);
  }
});

module.exports = router;
