const mongoose = require("mongoose");

const fitSchema = new mongoose.Schema({
   neighborhood: {
    type: String,
    required: true,
   },

  gym: {
    type: String,
  },

  doggy_daycare: {
    type: String,
    required: true,
  },
 });

const Fit = mongoose.model('Fit', fitSchema);

module.exports = Fit;
