import Product from "../models/product.js";
import { v2 as cloudinary } from "cloudinary";

// api/product/All
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, message: products });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// api/product/delete
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params.id;
    await User.findByIdAndDelete("id_here");
    res.json({ success: true, message: "product deleted" });
  } catch (error) {
        console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// api/product/add
export const addProduct = async (req, res) => {
  try {
    const productData = JSON.parse(req.body.productData);
    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
    await Product.create({ ...productData, images: imagesUrl });

    res.json({ success: true, message: "Product added" });
    if (!productData) {
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// api/product/edit
export const editProduct = async (req, res) => {


};

// api/product/id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// api/product/changeStock
export const changeStockProduct = async (req, res) => {
try {
    const { inStock,id } = req.params;
    const product = await Product.findByIdAndUpdate(id,{inStock:inStock});
    res.json({ success: true, product });


  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
