const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sobre', {
    title: 'Sobre',
    styles: ['/stylesheets/style.css'],
    scripts: []
  });
});

module.exports = router;
