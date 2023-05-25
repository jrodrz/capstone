const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({

  dog: {
    type: String
  },

});

const dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
