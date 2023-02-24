const { Schema, model } = require('mongoose');

const shirtSchema = new Schema({
  itemName: {
    type: String,
    required: true,
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
  },
  category: {
    type: String,
    trim: false,
  }
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
