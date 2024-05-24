const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
require('../models/Payments');
const Payments = mongoose.model("Payments") 

router.get('/tickets', async (req, res) => {
  const {ticket} = req.query;

  try {
    const voos = await Payments.find({
      ticket: ticket
      })
    res.send(voos)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
