import React from "react";
import { RiChat1Fill } from "react-icons/ri";

const NoChat = () => {
  return (
    <div className="h-full w-full bg-base-300 flex justify-around items-center ">
      <div>
        <div className="flex justify-center items-center">
          <RiChat1Fill size={60} className="animate-bounce" />
        </div>
        <h1 className="font-bold text-2xl flex justify-center items-center pt-3 pb-2">Welcome to Chattify!</h1>
        <p className="text-base-content/60">Select a conversation from the sidebar to </p>
        <p className="flex justify-center items-center text-base-content/60">start chatting</p>
      </div>
    </div>
  );
};

export default NoChat;
