const mongoose = require("mongoose");

const fitSchema = new mongoose.Schema({
   neighborhood: {
    type: String,
    required: true,
    validate:  /^[A-Za-z ]*$/
  },
  gym: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  doggy_day_care: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
 });

const Fit = mongoose.model('Fit', fitSchema);

module.exports = Fit;
