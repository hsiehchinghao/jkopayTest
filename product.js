const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeStockSchema = new Schema({
  size: { type: String, enum: ["s", "m", "l", "xl", "xxl"], required: true },
  stocks: { type: Number, default: 0 },
});
const colorPriceSchema = new Schema({
  color: { type: String, required: true },
  photo: { type: String },
  price: { type: Number, required: true },
  stocks: [sizeStockSchema],
});
const productSchema = new Schema({
  name: { type: String, required: true },
  photos: [{ type: String }],
  colors: [colorPriceSchema],
  desc: { type: String, required: true },
  category: { type: String, required: true },
  notice: [{ type: String, required: true }],
  ps: { type: String },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
