const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({

  gym: {
    type: String
  },

});

const gym = mongoose.model('Gym', gymSchema);

module.exports = Gym;
