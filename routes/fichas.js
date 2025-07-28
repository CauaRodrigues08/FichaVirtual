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


// Para atualizar dados da ficha
router.put('/:id', async (req, res) => {
  setMissingCheckboxes(req.body, checkboxPaths);

  try {
    const sheetId = req.params.id;
    const updateData = flat.flatten(req.body);
    

    const updatedSheet = await Sheet.findByIdAndUpdate(
      sheetId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedSheet) {
      return res.status(404).send('Ficha não encontrada');
    }

    res.redirect(`/fichas/${updatedSheet._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar ficha :' + err + '\n' + JSON.stringify(req.body, null, 2));
  }
});

module.exports = router;