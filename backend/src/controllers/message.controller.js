import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import cloudinary from "../lib/cloudinary.js"
import { getReciverSocketId } from "../lib/socket.io.js"
import { io } from "../lib/socket.io.js"


export const getUsersForSidebar = async (req, res) => {
    try {
        const UserId = req.user._id
        const users = await User.find({ _id: { $ne: UserId } }).select("-password")
        res.status(200).json(users)
   

    } catch (error) {
        console.log("error in the getUsersForSidebar controller", error)
        res.status(500).json({
            message: "server error"
        })


    }




}

export const getMessages = async (req, res) => {

    try {
        const { id: userToChatId } = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or: [{
                senderId: myId,
                reciverId: userToChatId
            }, {
                senderId: userToChatId,
                reciverId: myId
            }
            ]
        })
        res.status(200).json(messages)


    } catch (error) {
        console.log("error in  the message controller", error.message)
        res.status(500).json({
            message: "server error"
        })

    }




}

export const sendMessage = async (req, res) => {


    try {
        const { text, image } = req.body

        const reciverId = req.params.id
        const senderId = req.user._id

        let imageUrl
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;

        }

        const newMessage = new Message({
            senderId,
            reciverId,
            text,
            image: imageUrl
        })

        await newMessage.save()



        //socket.io implementaion from here


        const reciverSocketId=getReciverSocketId(reciverId)
        if(reciverSocketId){
            io.to(reciverSocketId).emit("newMessage",newMessage)

        }

        

        res.status(200).json(newMessage)




    } catch (error) {
        console.log("error in  the sendMessage controller", error.message)
        res.status(500).json({
            message: "server error"
        })


    }

}