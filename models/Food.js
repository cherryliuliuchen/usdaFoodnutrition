const mongoose = require('mongoose');

//Create the food model
const FoodSchema = new mongoose.Schema({
  fdcId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  foodNutrients: [{ nutrientName: String, value: Number }]
});

module.exports = mongoose.model('Food', FoodSchema);
