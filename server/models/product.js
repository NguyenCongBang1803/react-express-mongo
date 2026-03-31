import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discription: { type: Array, required: true },
    price: { type: Number, required: true },
    priceOffer: { type: Number, required: true },
    images: { type: Array, required: true },
    category: { type: Array, required: true },
    inStock: { type: Boolean, required: true },
}, { timestamps: true })
const Product = mongoose.model.product || mongoose.model('product', productSchema)

export default Product 