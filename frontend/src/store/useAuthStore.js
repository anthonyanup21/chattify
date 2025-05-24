import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from 'react-hot-toast';
import { useChatStore } from "./useChatStore";
import { io } from "socket.io-client"


const BASE_URL=import.meta.env.MODE == "development" ? "http://localhost:3000" : "/"

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    socket: null,
    onlineUsers: [],
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUser: res.data })
            get().connectSocket()


        } catch (error) {
            console.log("error in checkAuth", error)
            set({ authUser: null })

        } finally {
            set({ isCheckingAuth: false })

        }
    },
    signup: async (formData) => {
        try {
            set({ isSigningUp: true })
            const res = await axiosInstance.post("/auth/signup", {
                email: formData.email,
                fullName: formData.username,
                password: formData.password
            })
            set({ authUser: res.data })
            toast.success("Account created successfully!")
            get().connectSocket()



        } catch (error) {
            toast.error(error.response.data.message)
            set({ isSigningUp: false })
            console.log("error in signup", error)

        } finally {
            set({ isSigningUp: false })

        }

    },
    login: async (formData) => {
        try {
            set({ isLoggingIn: true })
            const res = await axiosInstance.post("/auth/login", {
                email: formData.email,
                password: formData.password
            })
            set({ authUser: res.data })
            toast.success("Logged in successfully!")


            get().connectSocket()


        } catch (error) {
            toast.error(error.response.data.message)
            set({ isLoggingIn: false })
            console.log("error in login", error)

        } finally {
            set({ isLoggingIn: false })

        }

    },
    logout: async () => {

        try {
            await axiosInstance.post("/auth/logout")
            set({ authUser: null })
            const closeChat = useChatStore.getState().closeChat;
            closeChat();

            toast.success("Logged out successfully!")
            get().disconnectSocket()



        } catch (error) {
            toast.error(error.response?.data?.message || "logout failed")
            console.log("error in logout ", error)

        }

    },
    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })


        try {
            const res = await axiosInstance.put("/auth/updateProfile", data)
            set({ authUser: res.data })
            toast.success("Profile updated successfully")

        } catch (error) {
            toast.error(error.response.data.message || "Update failed")

            console.log("error in the update profile", error)

        } finally {
            set({ isUpdatingProfile: false })


        }


    },

    connectSocket: () => {

        const { authUser } = get()
        if (!authUser || get().socket?.connected) return
        const socket = io(BASE_URL,
            {
                query: {
                    userId: authUser._id
                }
            }
        )
        socket.connect()
        set({ socket: socket })

        socket.on("getOnlineUsers",(users)=>{
            set({onlineUsers:users})
        })

    },
    disconnectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect()

    }



}))