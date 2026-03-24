import User from "../models/user.js";
import bcrypt from 'bcryptjs'
// register User
export const register = async (req,res)=>{
try {
    const {name, email, password}=req.body;
    //check In4 missing user
    if(!name || !email || !password){
        return res.json({success:false,message:'missing details'})
    }
    // check user is exist
    const existingUser =await User.findOne({email})
    if(existingUser){
        return res.json({success:false,message:'User eamil already exists'})

    }
    // hash user password
    const passwordHashed =await bcrypt.hash(password,10)

    //create User
    const user = await User.create({name, email, password:passwordHashed})

} catch (error) {
    
}
}