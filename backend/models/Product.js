const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    imgUrl: { type: Array, required: true },
    categ: { type: String },
    inStock: { type: Boolean, required: true },
    price: { type: Number, required: true },
    msg: { type: String, required: true },
    onFrontPage: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
