const axios = require('axios');
const config = require('../config/config');

exports.searchFood = async (req, res) => {
  try {
    const query = req.query.query || 'matcha';
    const response = await axios.get(`${config.USDA_API_BASE_URL}foods/search`, {
      params: {
        query,
        api_key: process.env.USDA_API_KEY
      }
    });

    // Only keep fdcId and description
    const foods = response.data.foods.map(food => ({
      fdcId: food.fdcId,
      description: food.description,
    }));

    res.json(foods);
  } catch (err) {
    console.error('Error occurred:', err.message);
    res.status(500).send('Server error');
  }
};
