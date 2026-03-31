import express from 'express'
import authUser from '../middlewares/authUser'
import { updateCart } from '../controllers/cartItemController.js'

const cartRouter=express.Router()
cartRouter.post('/update',updateCart)
export default cartRouter
