import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import NoChat from "../components/NoChat";

const Home = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="bg-base-100 h-[calc(100vh-3rem)] w-full">
      {/* Mobile: only one of Sidebar or ChatContainer is shown */}
      <div className="flex md:hidden h-full w-full">
        {!selectedUser && <Sidebar isMobile />}
        {selectedUser && <ChatContainer isMobile />}
      </div>

      {/* Desktop: show both side-by-side */}
      <div className="hidden md:flex h-full w-full">
        <Sidebar />
        {selectedUser ? <ChatContainer /> : <NoChat />}
      </div>
    </div>
  );
};

export default Home;
