const express = require("express");
const mongoose = require('mongoose');
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const port = 8080;

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.json())


const Payments = mongoose.model('Payments', { 
  from: String,
  to: String,
  from_hour: String,
  to_hour: String,
  return_from_hour: String,
  return_to_hour: String,
  from_date: String,
  to_date: String,
  duration: String,
  duration_return: String,
  class: String,
  company: String,
  value: String,
  first_name: String,
  last_name: String,
  ticket: String,
});

app.post('/checkout', async (req, res)=> {
  const payments = new Payments({
    from: req.body.from,
    to: req.body.to,
    from_hour: req.body.from_hour,
    to_hour: req.body.to_hour,
    return_from_hour: req.body.return_from_hour,
    return_to_hour: req.body.return_to_hour,
    from_date: req.body.from_date,
    to_date: req.body.to_date,
    duration: req.body.duration,
    duration_return: req.body.duration_return,
    class: req.body.class,
    company: req.body.company,
    value: req.body.value,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    ticket: req.body.ticket,
  })

  await payments.save()
  res.send(payments)

});

app.get('/checkout', (req, res)=> {
  res.sendFile(path.join(__dirname, "checkout.html"))
});



app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(__dirname + '/public/favicon.png')); 

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.get('/reservar', (req, res)=> {
  res.sendFile(path.join(__dirname, "reservar.html"))
});

app.get('/consultar', (req, res)=> {
  res.sendFile(path.join(__dirname, "consultar.html"))
});








app.listen(port, ()=> {
  mongoose.connect('mongodb+srv://tobiasmelo:timFax-3watta-zikris@flightcy-api.46n60o9.mongodb.net/?retryWrites=true&w=majority&appName=flightcy-api', {dbName: 'flights'});
  console.log("Servidor rodando.")
});



