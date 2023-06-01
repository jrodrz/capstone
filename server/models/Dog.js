const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({

  dog: {
    type: String,
    validate: /^[A-Za-z0-9 .,']*$/
  },
 });

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
