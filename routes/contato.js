const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contato', {
    title: 'Contato',
    styles: ['/stylesheets/style.css'],
    scripts: []
  });
});

module.exports = router;