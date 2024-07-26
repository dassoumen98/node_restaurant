const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
        
      },
      work: {
        type: String,
        enum:['chef','owner','manager','waiter'],
        required: true,
      },
      mobile: {
        type: String,
        required: true,
        
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      address: {
        type: String,
        required: true,
      },
      salary: {
        type: Number,
        required: true,
        min: 0,
      },
})

// create a perosn model

const Person = mongoose.model('Perosn',personSchema);

module.exports = Person