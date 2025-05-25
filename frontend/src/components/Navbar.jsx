import React, { useState } from 'react';
import { RiChat1Fill } from "react-icons/ri";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { FaUser, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDrawerOpen(false);
  }

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={(e) => setIsDrawerOpen(e.target.checked)}
      />
      <div className="drawer-content bg-base-200 p-3 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <RiChat1Fill size={25} />
          <span>Chattify</span>
        </Link>

        <ul className="hidden sm:flex flex-wrap gap-4 text-sm sm:text-base">
          <li>
            <Link to="/settings" className="flex items-center gap-1 font-medium hover:text-primary transition-colors">
              <IoSettingsSharp size={18} />
              <span>Settings</span>
            </Link>
          </li>
          {authUser && (
            <>
              <li>
                <Link to="/profile" className="flex items-center gap-1 font-medium hover:text-primary transition-colors">
                  <FaUser size={16} />
                  <span>Profile</span>
                </Link>
              </li>
              <li
                onClick={handleLogout}
                className="flex items-center gap-1 font-medium cursor-pointer hover:text-primary transition-colors"
              >
                <IoLogOut size={20} />
                <span>Logout</span>
              </li>
            </>
          )}
        </ul>

        <label
          htmlFor="my-drawer-4"
          className="btn btn-square btn-ghost sm:hidden"
        >
          <FaBars size={20} />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          <li>
            <Link to="/settings" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-2">
              <IoSettingsSharp size={18} />
              <span>Settings</span>
            </Link>
          </li>
          {authUser && (
            <>
              <li>
                <Link to="/profile" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-2">
                  <FaUser size={16} />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IoLogOut size={20} />
                  <span>Logout</span>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
