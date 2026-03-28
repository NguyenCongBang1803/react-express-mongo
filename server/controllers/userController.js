import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// register User  /api/user/register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //check In4 missing user
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'missing details' })
        }
        // check user is exist
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User eamil already exists' })
        }
        // hash user password
        const passwordHashed = await bcrypt.hash(password, 10)
        //create User
        const user = await User.create({ name, email, password: passwordHashed })
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.cookie('token', token, {
            httpOnly: true, //prevent js to access
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,    
        })
        return res.status(200).json({ success: true, user: { email: user.email, name: user.name } })
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message })
    }
}

// Login user api/user/login

export const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        // check existed user

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: 'Your email doesn\'t exist' })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Incorrect password' })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.cookie('token', token, {
            httpOnly: true, //prevent js to access
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return res.status(200).json({ success: true, user: { email: user.email, name: user.name } })



    }
    catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message })

    }
}


// check auth 
export const isAuth = async (req, res) => {
    try {
        const userId  = req.userId
        const user = await User.findById(userId).select("-password")
        return res.json({ success: true, user })
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message })
    }
}


// logoutUser
export const logout= async (req,res)=> {
    try {
    res.clearCookie('token',{
        httpOnly:'true',
        secure:process.env.NODE_ENV==='production',
        sameSite:process.env.NODE_ENV==='prosuction'?'none':'strict',
    })
    return res.json({success:'true',message:'Logged out'})
    }
     catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
    }
}


