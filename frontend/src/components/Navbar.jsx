import React from 'react'
import { RiChat1Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';



const Navbar = () => {

  const { authUser,logout } = useAuthStore()
  return (
    <div className='flex p-2 justify-between bg-base-200'  >
      {/* logo */}

        
        <p className='font-extrabold text-[19px]  '><Link to="/" className='flex gap-2'> <RiChat1Fill size={25} /> Chattify</Link> </p>


      {/* navigations*/}
      <ul className='flex gap-4'>
        <li ><Link to="/settings" className="flex gap-1 font-bold cursor-pointer"><IoSettingsSharp size={18} className='mt-1' />Settings</Link></li>
        {authUser && <li ><Link to="/profile" className="flex gap-1 font-bold cursor-pointer"><FaUser size={16} className='mt-1' /> Profile</Link></li>}
        {authUser && <li className="flex gap-1 font-bold cursor-pointer" onClick={logout}><IoLogOut size={20} className='mt-1' /> Logout</li>}
      </ul>
    </div>
  )
}

export default Navbar