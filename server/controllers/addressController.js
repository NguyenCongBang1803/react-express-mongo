import Address from "../models/address.js";

// api/address/add
export const addAddress = async (req,res) => {
    try {
        const{address,userId}=req.body
        await Address.create({...address,userId})
        res.json({success:true,message:"Address added succesfully"})

    } catch (error) {
            console.log(error.message)
            res.json({success:false,message:error.message})
    }
}
    // api/address/get
export const getAddress = async (req,res) => {
    try {
        const{userId}=req.params.id
        await Address.find({userId})
        res.json({success:true,message:"Addressed"})

    } catch (error) {
            console.log(error.message)
            res.json({success:false,message:error.message})
    }
}
    