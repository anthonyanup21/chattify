import React from "react";
import { RiChat1Fill } from "react-icons/ri";

const NoChat = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] md:h-full w-full bg-base-300 text-center p-6">
      <RiChat1Fill size={60} className="text-primary animate-bounce mb-4" />
      <h1 className="text-2xl font-bold">Welcome to Chattify!</h1>
      <p className="text-base-content/60 mt-2">
        Select a conversation from the sidebar to start chatting.
      </p>
    </div>
  );
};

export default NoChat;
