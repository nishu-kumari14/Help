const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        require:true
    },
    amount:
    {
        type: Number,
        required:true
    }
});
const Product = new mongoose.model('user',ProductSchema);
module.exports = Product;