import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import User from "./User";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const [showOnlineUsersOnly, setshowOnlineUsersOnly] = useState(false);

  const filteredUser = showOnlineUsersOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading)
    return (
      <div className="flex justify-center items-center w-full sm:w-1/3 lg:w-1/4 bg-base-300 h-full border-r border-white">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 bg-base-300 h-full border-r border-white">
      <div className="pt-4 pl-2 flex gap-2 mb-2">
        <FaUser size={20} />
        <p className="font-medium">Contacts</p>
      </div>
      <div className="mt-0 pl-2 text-[13px] mb-4">
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
            onChange={(e) => setshowOnlineUsersOnly(e.target.checked)}
          />
          <p className="text-xs sm:text-sm">Show online Users ({onlineUsers.length - 1} online)</p>
        </label>
      </div>

      <div className="space-y-2 h-[calc(100vh-3rem-120px)] sm:h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar px-2 py-3">
        {filteredUser.map((data) => (
          <User data={data} key={data._id} />
        ))}

        {filteredUser.length == 0 && (
          <div className="h-full w-full flex justify-center text-sm sm:text-base">no online users</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;