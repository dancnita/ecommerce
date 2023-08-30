const mongoose = require('mongoose');

const ProductCategSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    desc: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProductCateg', ProductCategSchema);
