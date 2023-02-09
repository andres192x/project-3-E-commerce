const { Schema, model } = require('mongoose');

const shirtSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  size: [
    {
      type: String,
      default: "M",
      trim: true,
    },
  ],
  inStock: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
  },
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
