const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const menuItemSchema = new mongooose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  taste: {
    type: String,
    required: true,
    enum: ["Sweet", "Spicy", "Bitter", "Sour"], // Optional: limit the possible values for taste
  },
  is_drink: {
    type: Boolean,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings
    default: [],
  },
  num_sales: {
    type: Number,
    required: true,
    default: 0,
  },
});

const menuItem = mongoose.model("menuItem", menuItemSchema);
module.exports = menuItem;
