const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
   gym: {
    type: String
   }
 });

const Fit = mongoose.model('gym', bymSchema);

module.exports = gymSchema;
