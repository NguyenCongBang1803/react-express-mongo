import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import sellerRouter from './routes/sellerRouter.js'
import connectCloudinary from './config/cloudinary.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRouter.js'
import addressRouter from './routes/addressRoute.js'

dotenv.config();
const app = express()
const port = process.env.PORT || 4000
await connectDB();
await connectCloudinary();


// allow multiple origins 
const allowedOrigins=['http://localhost:5173']


// middleware configuration 
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials:true}))


app.get('/',(req,res)=>{
    res.send("API is working")
})

app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
    
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
 })



 