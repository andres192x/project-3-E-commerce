const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    price: {
        type: String,
    },
    imgurl: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
    },
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;