const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Flights')
const Flights = mongoose.model('flights')

function formatDate(dateString) {
  if (!dateString) return null; 
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

router.get('/voos', async (req, res) => {
  const { from, to, ida, volta, classe } = req.query;

  const formattedFrom = `${from}`;
  const formattedTo = `${to}`;
  const formattedIda = `${formatDate(ida)}`;
  const formattedVolta = `${formatDate(volta)}`;
  const formattedClass = `${classe}`;

  try {
    const voos = await Flights.find({
      from: formattedFrom,
      to: formattedTo,
      from_date: formattedIda,
      to_date: formattedVolta,
      class: formattedClass })
    res.send(voos)
  } catch (err) {
    res.status(500).send(err)
  }
})


module.exports = router
