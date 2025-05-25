import React from "react";
import { IoCloseSharp, IoArrowBack } from "react-icons/io5";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, closeChat } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="mb-2 flex items-center justify-between px-2 py-1 border-b border-base-200">
      <div className="flex items-center gap-4">
        {/* Back button for mobile */}
        <button
          onClick={closeChat}
          className="block md:hidden text-xl mr-1 text-base-content"
        >
          <IoArrowBack />
        </button>

        <div
          className={`avatar ${
            onlineUsers.includes(selectedUser._id) ? "avatar-online" : "avatar-offline"
          }`}
        >
          <div className="w-11 rounded-full">
            <img
              className="object-cover"
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
          <p className="text-sm text-gray-500">
            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Optional close button for larger screens */}
      <button
        onClick={closeChat}
        className="hidden md:block hover:bg-base-300 p-1 rounded-full"
      >
        <IoCloseSharp size={22} />
      </button>
    </div>
  );
};

export default ChatHeader;
