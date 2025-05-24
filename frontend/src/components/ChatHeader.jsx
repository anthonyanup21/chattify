import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useChatStore } from "../store/useChatStore";
import User from "./User";
import { useAuthStore } from "../store/useAuthStore";


const ChatHeader = () => {
      const { selectedUser,closeChat } =useChatStore();
      const {onlineUsers}=useAuthStore()
    
  return (
    <div className="  mb-2  flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <div className={`avatar ${onlineUsers.includes(selectedUser._id) ? "avatar-online" :"avatar-offline" } `}>
          <div className="w-11 rounded-full">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src={
                selectedUser?.profilePic ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User"
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">{selectedUser?.fullName}</h1>
          <p className="text-sm text-gray-500">{`${onlineUsers.includes(selectedUser._id) ? "Online" :"Offline" }`}</p>
        </div>
      </div>

      {/* <User data={selectedUser}/> */}

      <button
        onClick={() => {
          closeChat();
        }}
        className="hover:bg-base-300 cursor-pointer"
      >
        <IoCloseSharp size={25} />
      </button>
    </div>
  );
};

export default ChatHeader;
