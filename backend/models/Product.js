const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    product_id: Number,
    category: String,
    product_name: String,
    old_price: Number,
    new_price: Number,
    money_type: Number,
    brand: String,
    flavor: String,
    pot: String,
    product_type: String,
});
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;