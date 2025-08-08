import React from 'react'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'
import Cp from '../../assets/svgs/change_password.svg'
import { useState } from 'react'
import axios from 'axios'

export const forgotPassword = () => {

     const[userData, setUserData]=useState({
      password:'',
      password:''
    })
    const handelChange=(e)=>{
      const{name, value}=e.target;
      setUserData({
        ...userData,
        [name]:value
      })
    }
  
    const handleSubmit=async(e)=>{
      e.preventDefault()

      if(!userData.password){
        return alert('please, fill both the password')
      }

      try{
      const response= await axios.post('http://localhost:5000/api/auth/change-password', userData);
      alert("Password changed Successfully")
      window.location.href = '/Login'

      } catch(err){
        alert('Error occured during password setup')
      }
    }

  return (
     <>
      <div className="h-screen w-full flex"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* 1st container */}
         <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24 flex flex-col"
        >
            <img src={Cp} alt="image" className='h-80 pb-10' />
            <div className='text-white p-5 flex flex-col items-left gap-y-3'>
                <h1 className='text-4xl font-bold'>Make a new password</h1>
                <p className='w-full text-lg'>Change the password with strong character and make your account secure. </p>
            </div>
        </div>

        {/* 2nd container */}
        <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24">
          {/* log in contain garne div */}
          <div className="h-full w-full rounded-2xl flex flex-col justify-center items-center gap-12 bg-white outline">
            {/* heading wala section */}
            <img src={logo} className="h-30 place-items-center mt-5" />
            <div className="text-center justify-center">
              <h1 className="font-bold text-4xl">Create the New Password </h1>
              <p className="mt-2">
                Please, Enter the password to proceed
              </p>
            </div>

            {/* login form */}
            <form onSubmit={handleSubmit}
              action="submit"
              className="w-full sm:w-96 gap-2 flex flex-col p-5"
            >
              <div className="flex items-center gap-2">        
                <input
                  type="password"
                  placeholder="New password"
                  name="new-pass"
                  onChange={handelChange}
                  className="bg-[#ffffff] rounded-2xl border-black h-14 w-full p-2 border"
                />
              </div>

              <div className="flex items-center gap-2">        
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-pass"
                  onChange={handelChange}
                  className="bg-[#ffffff] rounded-2xl border-black h-14 w-full p-2 border"
                />
              </div>

              <button type='submit' className="bg-black h-14 w-full rounded-2xl text-white cursor-pointer hover:bg-[#F25D5D] outline font-bold transition-all duration-10 mt-7 mb-10"
              onClick={handleSubmit}>
                Save Password
              </button>
             
            </form>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default forgotPassword;
