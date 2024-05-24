const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
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
  ticket: String
});

mongoose.model('flights', flightSchema);
