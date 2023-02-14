const { Schema, model } = require('mongoose');

const shirtSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  size:
  {
    type: [String],
    trim: false,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  price: {
    type: String,
  },
  imgurl: {
    type: String,
  }
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
