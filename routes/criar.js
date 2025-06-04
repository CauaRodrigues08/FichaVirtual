const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('criar', {
    title: 'Criar ficha',
    styles: ['/stylesheets/style.css'],
    scripts: ['/javascripts/hp.js', '/javascripts/mp.js', '/javascripts/sanidade.js', '/javascripts/skills.js']
  });
});

module.exports = router;