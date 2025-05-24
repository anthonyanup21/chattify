import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiChatSmile2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import User from "./User";
import { useChatStore } from "../store/useChatStore";
import { FaUser } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
console.log("users",users)
  console.log(import.meta.env.VITE_SECURE)
  const { onlineUsers } = useAuthStore();

  const [showOnlineUsersOnly, setshowOnlineUsersOnly] = useState(false);

  const filteredUser = showOnlineUsersOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading)
    return (
      <div className="flex justify-center items-center w-1/3 bg-base-300 h-full border-r-1 border-white">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div className="w-1/3 bg-base-300 h-full pr-0 border-r-1 border-white ">
      <div className="pt-4 pl-2 flex gap-2 mb-2">
        <FaUser size={20} />
        <p className="font-medium">Contacts</p>
      </div>
      <div className="mt-0 pl-2 text-[13px] mb-4">
        <label className="flex gap-2">
          <input
            type="checkbox"
            
            className="checkbox checkbox-sm"
            onChange={(e)=>setshowOnlineUsersOnly(e.target.checked)}
          />
          <p >Show online Users ({onlineUsers.length-1} online)</p>
        </label>
      </div>

      <div className="space-y-2 h-[calc(100vh-120px)] overflow-x-hidden py-3 px-2 custom-scrollbar">
        {filteredUser.map((data) => (
          <User data={data} key={data._id} />
        ))}

        {filteredUser.length==0 && <div className=" h-full w-full flex justify-center "> no online users</div> }
      </div>
    </div>
  );
};

export default Sidebar;
