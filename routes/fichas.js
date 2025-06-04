const express = require('express');
const router = express.Router();

//Para carregar a lista de fichas
router.get('/', (req, res) => {
  res.render('lista-fichas', {
    title: 'Lista de fichas',
    styles: ['/stylesheets/style.css'],
    scripts: []
  });
});

//Para carregar uma ficha específica
router.get('/:id', (req, res) => {
  const fichaId = req.params.id;
  res.render('ficha', {
    title: 'Ficha de ' + fichaId,
    id: fichaId,
    styles: ['/stylesheets/style.css'],
    scripts: ['/javascripts/hp.js', '/javascripts/mp.js', '/javascripts/sanidade.js', '/javascripts/skills.js'] 
  });
});

module.exports = router;