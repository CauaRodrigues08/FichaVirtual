var createError = require('http-errors');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = 8000;
require('dotenv').config();
const dbURI = process.env.DB_URI;
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const sobreRouter = require('./routes/sobre');
const contatoRouter = require('./routes/contato');
const criarRouter = require('./routes/criar');
const fichasRouter = require('./routes/fichas');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.use('/', indexRouter);
app.use('/sobre', sobreRouter);
app.use('/contato', contatoRouter);
app.use('/criar', criarRouter);
app.use('/fichas', fichasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
