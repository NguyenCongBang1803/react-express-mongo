import express from 'express'
import authSeller from '../middlewares/authSeller.js'
import { addProduct, changeStockProduct, deleteProduct, editProduct } from '../controllers/productsController.js'
import {upload} from "../config/multer.js"

const productRouter=express.Router()
productRouter.post('/add',upload.array([images]),authSeller,addProduct)
productRouter.post('/update',upload.array([images]),authSeller,editProduct)
productRouter.get('/delete/:id',authSeller,deleteProduct)
productRouter.get('/changeStock/:id/inStock',authSeller,changeStockProduct)

export default productRouter
