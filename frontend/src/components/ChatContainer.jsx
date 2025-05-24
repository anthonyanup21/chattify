import React, { useEffect, useRef } from "react";
import User from "./User";
import Message from "./Message";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatSkleton from "../skletons/ChatSkleton";

import { useAuthStore } from "../store/useAuthStore.js";

const ChatContainer = () => {
  const {
    selectedUser,
    messages,
    getMessages,
    isMessagesLoading,
    closeChat,
    subscribeToMessage,
    unsubscribeFromMessage,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const bottomRef = useRef(null);
  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessage();

    return () => unsubscribeFromMessage();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessage,
    unsubscribeFromMessage,
  ]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="h-full w-full flex flex-col justify-between bg-base-300 p-2 rounded-lg">
        <ChatHeader />
        <ChatSkleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col justify-between bg-base-300 p-2 rounded-lg">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto space-y-3 p-2 custom-scrollbar" >
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.senderId == authUser._id ? "chat-end" : "chat-start"
            }` }
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={`${
                    message.senderId == authUser._id
                      ? authUser.profilePic ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      : selectedUser.profilePic ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }`}
                />
              </div>
            </div>

            <div className="chat-header">
              {/* {message.senderId == authUser._id
                ? authUser.fullName
                : selectedUser.fullName} */}

              <time className="text-xs opacity-50">
                {new Intl.DateTimeFormat("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                }).format(new Date(message.createdAt))}
              </time>
            </div>
            <div className="chat-bubble bg-base-100 rounded-2xl my-1 max-w-xs break-words">
              {message.image && (
                <img
                  src={message.image}
                  className="w-[200px] rounded-md mb-2"
                  alt="Image"
                />
              )}
              {message.text && (
                <p className="whitespace-normal break-words">{message.text}</p>
              )}
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}

        <div ref={bottomRef}></div>
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
