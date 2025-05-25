import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";


export const useChatStore = create((set, get) => ({

    messages: [],
    users: [],
    onlineUsers: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get("/message/users")
            set({ users: res.data })




        } catch (error) {
            toast.error(error.response.data.message)

        } finally {
            set({ isUsersLoading: false })
        }

    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/message/${userId}`)
            set({ messages: res.data })

        } catch (error) {
            toast.error(error.response.data.message)


        } finally {
            set({ isMessagesLoading: false })


        }

    },

    //todo:optomize it later
    setSelectedUser: (selectedUser) => {
        set({ selectedUser: selectedUser })
    },
    closeChat: () => {
        set({ selectedUser: null })

    },
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get()
        try {
            const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData)
            set({ messages: [...messages, res.data] })

        } catch (error) {
            toast.error(error.response.data.message)

        }
    },
    subscribeToMessage: () => {
        const { selectedUser } = get()

        if (!selectedUser) return

        //optimize this later
        const socket = useAuthStore.getState().socket
        socket.on("newMessage", (newMessage) => {
            // Check if message is from selected user
            if(newMessage.senderId !== selectedUser._id) return 
            
            const currentMessages = get().messages;
            let isDuplicate = false;
            
            // Check if message already exists
            for(let i = 0; i < currentMessages.length; i++) {
                if(currentMessages[i]._id === newMessage._id) {
                    isDuplicate = true;
                    break;
                }
            }
            
            // Only add if it's not a duplicate
            if (!isDuplicate) {
                set({ messages: [...currentMessages, newMessage] })
            }
        })
    },
    unsubscribeFromMessage: () => {
        const socket = useAuthStore.getState().socket
        socket.off("newMessage")



    }



}))