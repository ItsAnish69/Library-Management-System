import React from 'react'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'
import Em from '../../assets/svgs/email.svg'
import { useState } from 'react'
import axios from 'axios'

export const forgotPassword = () => {

     const[userData, setUserData]=useState({
      text:''
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

      if(!userData.email){
        return alert('please, fill the email')
      }

      try{
      const response= await axios.post('http://localhost:5000/api/auth/forgot-password', userData);
      alert("OTP verification Successfull")
      window.location.href = '/change-password'

      } catch(err){
        alert('OPT not matched! Failed Verification')
      }
    }

  return (
     <>
      <div className="h-screen w-full flex"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* 1st container */}
         <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24 flex flex-col"
        >
            <img src={Em} alt="image" className='h-80 pb-10' />
            <div className='text-white p-5 flex flex-col items-left gap-y-3'>
                <h1 className='text-4xl font-bold'>Password Reset OTP</h1>
                <p className='w-full text-lg'>Use the OTP received on your email to acess and change your password. It is valid for only 15 minutes.</p>
            </div>
        </div>

        {/* 2nd container */}
        <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24">
          {/* log in contain garne div */}
          <div className="h-full w-full rounded-2xl flex flex-col justify-center items-center gap-12 bg-white outline">
            {/* heading wala section */}
            <img src={logo} className="h-30 place-items-center" />
            <div className="text-center justify-center">
              <h1 className="font-bold text-4xl">Enter OTP for Verification</h1>
              <p className="mt-2">
                Please, Enter the otp to proceed
              </p>
            </div>

            {/* login form */}
            <form onSubmit={handleSubmit}
              action="submit"
              className="w-full sm:w-96 gap-2 flex flex-col p-5"
            >
              <div className="flex items-center gap-2">        
                <input
                  type="text"
                  placeholder="OTP"
                  name="otp"
                  onChange={handelChange}
                  className="bg-[#ffffff] rounded-2xl border-black h-14 w-full p-2 border"
                />
              </div>
              <button type='submit' className="bg-black h-14 w-full rounded-2xl text-white cursor-pointer hover:bg-[#F25D5D] outline font-bold transition-all duration-10 mt-7 mb-10"
              onClick={handleSubmit}>
                Verify
              </button>
             
            </form>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default forgotPassword;
