import React, { useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosCamera } from "react-icons/io";
import { useAuthStore } from '../store/useAuthStore';


const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore()

  const [selectedImage, setselectedImage] = useState(null)
  const handleImageChange = async (e) => {

    const file = e.target.files[0]

   
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async () => {
      const base64Image = reader.result
      setselectedImage(base64Image)
      await updateProfile({ profilePic: base64Image })
    }



  }
  if (!authUser) {
    return <div className="text-white text-center mt-10"><span className="loading loading-dots loading-sm"></span></div>;
  }




  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mt-10">
      {/* Profile Card */}
      <div className="bg-base-200 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-base-content text-center mb-1">Profile</h2>
        <p className="text-center text-base-content mb-6">Your profile information</p>
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={
                selectedImage || authUser.profilePic ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-base-300 object-cover"
            />
            <label className="absolute bottom-2 right-2 bg-base-200 border border-base-content p-1 h-[30px] w-[30px] rounded-full cursor-pointer ">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                disabled={isUpdatingProfile}
              />
              <IoIosCamera className="text-base-content mt-0.5 ml-0.5" />
            </label>
          </div>
          <p className="text-xs text-base-content mt-2">
            {isUpdatingProfile ? <span className="loading loading-dots loading-sm"></span>
              : "Click the camera icon to update your photo"}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-base-content text-sm mb-1">Full Name</label>
          <input
            type="text"
            value={authUser.fullName}
            className="w-full px-4 py-2 rounded bg-base-100 border border-base-content text-base-content focus:outline-none"
            readOnly
          />
        </div>
        <div>
          <label className="block text-base-content text-sm mb-1">Email Address</label>
          <input
            type="email"
            value={authUser.email}
            className="w-full px-4 py-2 rounded bg-base-100 border border-base-content text-base-content focus:outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Account Information Card */}
      <div className="bg-base-200 rounded-xl shadow-lg p-6 w-full max-w-md mt-6">
        <h3 className="text-base-content font-semibold mb-3">Account Information</h3>
        <div className="flex justify-between text-base-content text-sm mb-3">
          <span>Member Since</span>
          <span>{new Date(authUser.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</span>
        </div>
        <hr className="border-base-content" />
        <div className="flex justify-between text-base-content text-sm mt-1">
          <span>Account Status</span>
          <span className="text-success font-bold">Active</span>
        </div>
      </div>
    </div>






  )
}

export default Profile