import Product from "../models/product.js";
import User from "../models/user.js";

// api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body

    const products = await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: products });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};