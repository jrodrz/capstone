const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema({

  neighborhood: {
    type: String
  },

});

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = Neighborhood;
