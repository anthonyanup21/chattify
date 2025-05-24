import jwt from "jsonwebtoken"

import User from "../models/user.model.js"


export const protectedRoute=async (req,res,next)=>{

    try {
        const token =req.cookies.jwt
        if(!token){
            return res.status(400).json({message:"unauthorized access"})
        }

        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        if(!decoded){
            return res.status(400).json({message:"unauthorized acced -invalid token"})
        }
 

        const user=await User.findOne({_id:decoded.userId}).select("-password") //it gives all the fields leaving password (password not includes)
        if (!user){
            res.status(400).json({message:"usernot found"})
        }

        req.user=user
        next()
        
    } catch (error) {

        console.log("error in the protectRoute ",error)
        res.status(500).json({message:"server error"})
        
    }

}