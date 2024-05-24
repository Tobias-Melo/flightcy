const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
require('../models/Payments');
const Payments = mongoose.model("Payments") 

router.post('/checkout', async (req, res) => {
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
  });

  await payments.save();
  res.send(payments);
});

console.log('pagamento enviado')

module.exports = router
