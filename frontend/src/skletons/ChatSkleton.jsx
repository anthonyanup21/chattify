import React from "react";

const ChatSkleton = () => {
  return (
    <div className="overflow-hidden">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-13 rounded-full">
            <div className="skeleton h-16 w-13 shrink-0 rounded-full bg-base-200"></div>
          </div>
        </div>
        <div className="chat-header ">
          <div className="skeleton h-5 w-20 bg-base-200 mb-1"></div>
        </div>
        
          <div className="skeleton h-10 w-35 bg-base-200"></div>
      </div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-13 rounded-full">
            <div className="skeleton h-16 w-13 shrink-0 rounded-full bg-base-200"></div>
          </div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-5 w-20 bg-base-200 mb-2"></div>
        </div>
          <div className="skeleton h-10 w-35 bg-base-200"></div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-13 rounded-full">
            <div className="skeleton h-13 w-16 shrink-0 rounded-full bg-base-200"></div>
          </div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-5 w-20 bg-base-200 mb-2"></div>
        </div>
          <div className="skeleton h-10 w-35 bg-base-200 "></div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-13 rounded-full">
            <div className="skeleton h-16 w-13 shrink-0 rounded-full bg-base-200"></div>
          </div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-5 w-20 bg-base-200 mb-2"></div>
        </div>
          <div className="skeleton h-10 w-35 bg-base-200 "></div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-13 rounded-full">
            <div className="skeleton h-16 w-13 shrink-0 rounded-full bg-base-200"></div>
          </div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-5 w-20 bg-base-200 mb-1 "></div>
        </div>
          <div className="skeleton h-10 w-35 bg-base-200 "></div>
      </div>
   
    </div>
  );
};

export default ChatSkleton;
