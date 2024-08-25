// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const logger = require('./logs/logger');

const app = express();

// Mddware
app.use(cors());//Cross-domain resource sharing
app.use(express.json());

// Software connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error(err));

// Routes
const foodRoutes = require('./routes/foodRoutes'); 
const userRoutes = require('./routes/userRoutes'); 

app.use('/api/food', foodRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Error handling middware
app.use((err, req, res, next) => {
  logger.error('Unexpected error:', err.stack); 
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
