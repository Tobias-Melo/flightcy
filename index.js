const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const mongoose = require('mongoose');

const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', require('./routes/payments'));
app.use('/', require('./routes/flights')); 
app.use('/', require('./routes/tickets')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(favicon(__dirname + '/public/favicon.png')); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "html/index.html"))
});

app.get('/reservar', (req, res)=> {
  res.sendFile(path.join(__dirname, "html/reservar.html"))
});

app.get('/checkout', (req, res)=> {
  res.sendFile(path.join(__dirname, "html/checkout.html"))
});

app.get('/consultar', (req, res)=> {
  res.sendFile(path.join(__dirname, "html/consultar.html"))
});

app.listen(port, ()=> {
  mongoose.connect('mongodb+srv://tobiasmelo:timFax-3watta-zikris@flightcy-api.46n60o9.mongodb.net/?retryWrites=true&w=majority&appName=flightcy-api', {dbName: 'flights'});
  console.log("Servidor rodando.")
});

module.exports = app;
