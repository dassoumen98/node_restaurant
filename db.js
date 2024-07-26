const mongoose = require('mongoose');
require('dotenv').config();

// const localURL = process.env.LOCAL_MONGODB_URL

const URL = process.env.MONGODB_URL
async function connectToDatabase() {
  try {
    await mongoose.connect(URL);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports= connectToDatabase
