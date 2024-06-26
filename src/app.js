const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');

const indexRouter = require('./routes/index');
const sessionRouter = require('./routes/sesion/session.routes');
const registerRouter = require('./routes/sesion/register.routes');
const homeRouter = require('./routes/principal/home.routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
dotenv.config({path: './env/.env'});

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//Rutas Principales
app.use(indexRouter);

app.use(sessionRouter);
app.use(registerRouter);

app.use(homeRouter);

app.get('/', (req, res) => {
  if (req.session.loggedin == true) {
    res.render('pages/pagesPrincipal/home', {
      login: true,
      name: req.session.name
    });
  }else{
    res.redirect('/');
  }
});
// catch 404 and forward to error handler
app.use((req,res,next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;