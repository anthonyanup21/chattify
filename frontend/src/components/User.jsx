import React from "react";
import { useChatStore } from "../store/useChatStore";
import {useAuthStore} from "../store/useAuthStore.js"



const User = (props) => {
    const {setSelectedUser,selectedUser} =useChatStore();
      const {onlineUsers}=useAuthStore()
    
 


 

  return (
     <div className={`p-1 flex items-center gap-4 hover:bg-base-200 cursor-pointer ${selectedUser?._id === props.data._id ? "bg-base-100" : ""}`} onClick={() => setSelectedUser(props.data)}>
  

      <div className={`avatar ${onlineUsers?.includes(props.data._id) ? "avatar-online" :"avatar-offline" } `}>
        <div className="w-12 rounded-full">
          <img src={props.data.profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold">{props.data.fullName}</h1>
        <p className="text-sm text-gray-500">{`${onlineUsers?.includes(props.data._id) ? "Online" :"Offline" }`}</p>
      </div>


      
    </div>

  
        
      

      
   
 
  );
};

export default User;
