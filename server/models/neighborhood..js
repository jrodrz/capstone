const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema({
   neighborhood: {
    type: String
   }
 });

const Fit = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = Neighborhood;
