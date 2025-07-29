const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');
const { checkboxPaths, setMissingCheckboxes } = require('../utils/checkboxPaths');
const flat = require('flat');

//Para carregar a lista de fichas
router.get('/', async (req, res) => {
  try {

  const sheets = await Sheet.find();

  res.render('lista-fichas', {
    title: 'Lista de fichas',
    styles: ['/stylesheets/style.css'],
    scripts: [],
    sheets
  });
} catch (err) {
  res.status(500).send('Ocorreu um erro: ' + err);
}
});

//Para carregar uma ficha específica
router.get('/:id', async (req, res) => {
  try {
    const sheet = await Sheet.findById(req.params.id);
    if (!sheet) return res.status(404).send('Ficha não encontrada');

    res.render('criar', {
      title: 'Ficha de ' + sheet.informacoes.nome,
      styles: ['/stylesheets/style.css'],
      scripts: [
        '/javascripts/hp.js',
        '/javascripts/mp.js', 
        '/javascripts/sanidade.js', 
        '/javascripts/skills.js'
      ],
      formAction: `/fichas/${sheet._id}?_method=PUT`,
      sheet
    });
  } catch (err) {
    console.error(err);
    res.status(400).send('ID inválido');
  }
});

function normalizeBooleans(obj) {
  Object.keys(obj).forEach(key => {
    const val = obj[key];

    // Se for array, pega o último
    if (Array.isArray(val)) {
      obj[key] = val[val.length - 1];
    }
    // Se for objeto, recursa
    else if (val !== null && typeof val === 'object') {
      normalizeBooleans(val);
    }
    // Se for string true/false, converte
    else if (val === 'true' || val === 'false') {
      obj[key] = (val === 'true');
    }
  });
}

// Para atualizar dados da ficha
router.put('/:id', async (req, res) => {
  try {
   
    setMissingCheckboxes(req.body, checkboxPaths);

    
    normalizeBooleans(req.body);

    
    const updateData = flat.flatten(req.body);
    
    const updatedSheet = await Sheet.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedSheet) {
      return res.status(404).send('Ficha não encontrada');
    }
    res.redirect(`/fichas/${updatedSheet._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar ficha: ' + err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedSheet = await Sheet.findByIdAndDelete(req.params.id);
    if (!deletedSheet) {
      return res.status(404).send('Ficha não encontrada');
    }
    res.redirect('/fichas');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar ficha: ' + err.message);
  }
});

module.exports = router;