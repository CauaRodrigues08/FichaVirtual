const express = require('express');
const router = express.Router();

//Para carregar a lista de fichas
router.get('/', (req, res) => {
  res.render('lista-fichas'); // ou res.json()
});

//Para carregar uma ficha específica
router.get('/:id', (req, res) => {
  const fichaId = req.params.id;
  res.render('ficha', { id: fichaId });
});

module.exports = router;