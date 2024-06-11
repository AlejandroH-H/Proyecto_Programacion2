const express = require('express');
const app= express();
const inicioRouter = require('./src/routes/inicio.js');
const path = require('path');
const morgan = require('morgan')
require('ejs')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'))


app.get('/',inicioRouter);

app.listen(3000)
console.log('localhost iniciado en el puerto 3000')