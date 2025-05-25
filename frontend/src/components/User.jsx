import React from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const User = ({ data }) => {
  const { setSelectedUser, selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(data._id);
  const isSelected = selectedUser?._id === data._id;

  return (
    <div
      className={`p-2 flex items-center gap-3 cursor-pointer rounded-md hover:bg-base-200 transition ${
        isSelected ? "bg-base-100" : ""
      }`}
      onClick={() => setSelectedUser(data)}
    >
      <div className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
        <div className="w-12 rounded-full">
          <img
            src={
              data.profilePic ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="Profile"
          />
        </div>
      </div>
      <div>
        <h1 className="font-semibold">{data.fullName}</h1>
        <p className="text-sm text-gray-500">{isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
};

export default User;
