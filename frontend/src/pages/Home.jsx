import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import NoChat from "../components/NoChat";

const Home = () => {

  
  

  const {selectedUser}=useChatStore()
  return (
    <div className="bg-base-100 flex p-40 pb-0 pt-3 h-[calc(100vh-3rem)]">
      <Sidebar/>
      {selectedUser ? <ChatContainer/> : <NoChat/> }
    


    </div>
  );
};
export default Home;
