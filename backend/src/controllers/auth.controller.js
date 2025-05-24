import User from "../models/user.model.js"
import bcrypt, { hash } from "bcryptjs"
import generateToken from "../utilities/generateToken.js"

import cloudinary from "../lib/cloudinary.js"


export const signup = async (req, res) => {
    const { email, fullName, password } = req.body

    try {
        if (!email || !fullName || !password) {
            return res.status(400).json({ message: "fill all the fields" })
        }
        if (password.length < 6) {
            return res.status(400).json({
                message: "password must be atlist 6 charactors"
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "user alreday exist "
            })
        }


        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUser = new User({
            email,
            fullName,
            password: hashedPassword
        })

        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save()
            res.status(200).json(
                newUser
            )


        } else {
            return res.status(400).json({
                message: "invalid user data"
            })
        }


    } catch (error) {
        res.status(500).json({ message: "server error" })
        console.log("error in the signup controller ", error.message)

    }


}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "all fields must be filled" })
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "password must be atlist 6 character long"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "user doesnt exist"
            })
        }
        const hashedPassword = user.password



        const result = await bcrypt.compare(password, hashedPassword)
        if (!result) {
            return res.status(400).json({
                message: "password is incorrect"
            })
        }
        if (user) {
            generateToken(user._id, res)
            res.status(200).json(user)
        }


    } catch (error) {

        console.log("error in the login controller", error)
        res.status(500).json({ messsage: "server error" })

    }



}

export const logout = (req, res) => {
    try {

        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "successfully loged out" })
    } catch (error) {
        console.log("error in the logout controller", error)
        res.status(500).json({ message: "server error" })

    }

}

export const updateProfile = async (req, res) => {

    try {
        const { profilePic } = req.body

        const userId = req.user._id

        if (!profilePic) {
            return res.status(400).json({ message: "provide profile pic" })
        }

        const uplodeResponse = await cloudinary.uploader.upload(profilePic)
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uplodeResponse.secure_url }, { new: true }).select("-password")

        res.status(200).json(updatedUser)


    } catch (error) {
        console.log("error in the update profile router",error)

        res.status(500).json({messsage:"server error"})

    }



}

export const checkAuth=(req,res)=>{
   try {
     res.status(200).json(req.user)
   } catch (error) {
    console.log("error in checkAuth controller",error)
    req.status(500).json({message:"server error"})
    
   }
}