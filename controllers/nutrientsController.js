const axios = require('axios');
const logger = require('../logs/nutrientsLogger');  
const Food = require('../models/Food'); 

exports.getFoodDetail = async (req, res) => {
  const { fdcId } = req.params;
  try {
    // First, try to get the data from db
    const food = await Food.findOne({ fdcId });

    if (food) {
      logger.info(`Data for fdcId ${fdcId} fetched from the database.`);  
      return res.json(food);
    }

    // If can not get data from db, send request to usda api.
    const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}`, {
      params: {
        api_key: process.env.USDA_API_KEY
      }
    });

    const foodDetail = {
      fdcId: response.data.fdcId,
      description: response.data.description,
      foodNutrients: response.data.foodNutrients.map(nutrient => ({
        nutrientName: nutrient.nutrient?.name || 'Unknown Nutrient',
        value: nutrient.amount !== undefined ? nutrient.amount : 0
      }))
    };

    logger.info(`Data for fdcId ${fdcId} fetched from the API.`);  // 将日志写入文件

    // Save the data to db
    const newFood = new Food(foodDetail);
    await newFood.save();

    res.json(foodDetail);
  } catch (err) {
    logger.error(`Error occurred while fetching food data for fdcId ${fdcId}: ${err.message}`);
    res.status(500).send('Server error');
  }
};
