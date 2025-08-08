import React from 'react'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'
import Fp from '../../assets/svgs/forgot_password.svg'
import { useState } from 'react'
import axios from 'axios'

export const forgotPassword = () => {

     const[userData, setUserData]=useState({
      email:''
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
      alert("Opt sent successfully")
      window.location.href = '/otp-verify'

      } catch(err){
        alert('Email not found! Failed to send otp')
      }
    }

  return (
     <>
      <div className="h-screen w-full flex"
       style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 1st section */}
        
        
        <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24">
          {/* log in contain garne div */}
          <div className="h-full w-130 rounded-2xl flex flex-col justify-center items-center gap-12 outline ml-10 bg-white">
            {/* heading wala section */}
            <img src={logo} className="h-30 place-items-center mt-5" />
            <div className="text-center justify-center">
              <h1 className="font-bold text-4xl">Enter Email for OTP</h1>
              <p className="mt-2">
                Please, Enter the email to proceed
              </p>
            </div>

            {/* login form */}
            <form onSubmit={handleSubmit}
              action="submit"
              className="w-full sm:w-96 flex flex-col p-5"
            >
              <div className="flex items-center gap-2">        
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handelChange}
                  className="bg-[#ffffff] rounded-2xl h-14 w-full p-2 border"
                />
              </div>
              <button type='submit' className="bg-black h-14 w-full rounded-2xl text-white cursor-pointer hover:bg-[#F25D5D] outline font-bold transition-all duration-10 mt-7 mb-10"
              onClick={handleSubmit}>
                send
              </button>
             
            </form>
          </div>
        </div>

        <div className="w-full sm:w-[50%] flex justify-center items-center px-8 sm:px-20 py-24 flex flex-col">            
            <div className='text-white p-5 flex flex-col items-left gap-y-3 '>
            <img src={Fp} alt="image" className='h-80 pb-10' />
                <h1 className='text-4xl font-bold'>Forgot your password, No worries!</h1>
                <p className='w-full text-lg'>Kindly provide the account email on the field beside for receiving an otp for password change</p>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default forgotPassword;
