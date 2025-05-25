import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuthStore } from '../store/useAuthStore';

import toast from 'react-hot-toast';






const Signup = () => {

  const [formData, setformData] = useState({

    email: "",
    username: "",
    password: ""

  })

  const [showPassword, setshowPassword] = useState(false)

  const { signup, isSigningUp } = useAuthStore()

  const validateForm = () => {

    if (!formData.email.trim() || !formData.username.trim() || !formData.password.trim()) {
      return (toast.error("fill all the fields"))
    }
    if (formData.password.length < 6) {
      return (toast.error("Password too short "))
    } else {
      return true
    }


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      signup(formData)

    }

  }
  return (

    <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center min-h-screen overflow-y-auto p-4'>
        <div className='space-y-6 rounded-3xl bg-base-300 p-6 sm:p-8 md:p-10 max-w-sm w-full'>
          <h1 className='text-center text-3xl sm:text-4xl font-extrabold'>Signup!</h1>

          <label className="input input-bordered flex items-center gap-2 w-full h-[3rem] rounded-2xl">
            <MdEmail size={17} />
            <input type="text" className="grow" placeholder="Email" value={formData.email} onChange={(e) => {
              setformData({ ...formData, email: e.target.value })
            }} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full h-[3rem] rounded-2xl">
            <FaUser />
            <input type="text" className="grow" placeholder="Username" value={formData.username} onChange={(e) => {
              setformData({ ...formData, username: e.target.value })
            }} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full h-[3rem] rounded-2xl">
            <FaKey />
            <input type={showPassword ? "text" : "password"} className="grow" placeholder='Password' value={formData.password} onChange={(e) => {
              setformData({ ...formData, password: e.target.value })
            }} />
            <div className='cursor-pointer p-1' onClick={() => { setshowPassword(!showPassword) }}>
              {showPassword ? <FaEye size={17} /> : <FaEyeSlash size={17} />}
            </div>
          </label>
          <button className="btn btn-active btn-primary w-full h-[3rem] rounded-2xl font-extrabold" disabled={isSigningUp}>
            {isSigningUp ? <span className="loading loading-dots loading-xl"></span> : "Signup"}
          </button>
          <p className='text-center text-sm'>Already have an account ? <span className='text-primary underline cursor-pointer'><Link to="/login">Login</Link></span></p>
        </div>
      </div>
    </form>
  )
}

export default Signup