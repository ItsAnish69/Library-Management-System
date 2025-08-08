import React from 'react'
import LoginSvg from "../../assets/svgs/login.svg";
import backgroundPng from "../../assets/images/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faUserTag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import axios from "axios";


const Register = () => {

  //sets the user data 
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    password:''
  })

  //gets the name and the value from the input 
    const handleChange = (e) =>{
      const {name, value}=e.target;
      setUserData({
        ...userData,
        [name]:value
      })
    }

    console.log(userData)

    //post the user data in the backend
    const handleSubmit = async(e) =>{
      e.preventDefault()
      if(!userData.name || !userData.email || !userData.password){
        return alert("Please, fill all the input fields")
      }
      try{
      const reponse = await axios.post('http://localhost:5000/api/auth/register', userData);
      const token = reponse.token;
      localStorage.getItem("token", token)
      alert("Registration Successfull")
    } catch(err){
      alert("Registration Failed")
    }
  }

  return (
    <>
          <div className="h-screen w-full flex">
            <div className="w-full sm:w-[55%] flex justify-center items-center px-8 sm:px-20 py-24">
              {/* log in contain garne div */}
              <div className="h-full w-full flex flex-col justify-center items-center gap-12">
                {/* heading wala section */}
                <div className="text-center">
                  <h1 className="font-bold text-5xl">Register</h1>
                  <p className="mt-3 text-lg">
                    If you haven't account, It's time to Register!
                  </p>
                </div>
    
                {/* login form */}
                <form
                  action="submit"
                  onSubmit={handleSubmit}
                  className="w-full sm:w-96 gap-5 flex flex-col"
                >
                  <div className="flex items-center gap-2">
                    {/* <RxAvatar size={40} /> */}
                    <FontAwesomeIcon icon={faUser} fontSize={25} />
                    <input
                      type="text"
                      placeholder="Username"
                      name='name'
                      onChange={handleChange}
                      required
                      className="bg-[#EAE9E9] rounded-2xl w-full p-4"
                    />
                  </div>
    
                  <div className="flex items-center gap-2">
                    {/* <FaLock size={40} /> */}
                    <FontAwesomeIcon icon={faEnvelope} fontSize={25} />
                    <input
                      type="email"
                      placeholder="email"
                      name='email'
                      onChange={handleChange}
                      required
                      className="bg-[#EAE9E9] rounded-2xl w-full p-4"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* <FaLock size={40} /> */}
                    <FontAwesomeIcon icon={faLock} fontSize={25} />
                    <input
                      type="password"
                      placeholder="Password"
                      name='password'
                      onChange={handleChange}
                      required
                      className="bg-[#EAE9E9] rounded-2xl w-full p-4"
                    />
                  </div>
    
                  <button className="font-bold ml-9 p-4 rounded-2xl text-white cursor-pointer bg-[#F25D5D] hover:bg-[#000] transition-all duration-200"
                  onClick={handleSubmit}>
                    Register
                  </button>
                </form>
    
                {/* Already Registered*/}
                <div className="text-center border-gray-300 p-2 ml-5 rounded-2xl w-full sm:w-96 flex justify-center items-center">
                  <p>Already Registered?</p>
                  <p className='pl-3 text-blue-600 cursor-pointer underline hover:text-blue-800' 
                  onClick={() => window.location.href ='/login'}>Login Now</p>
                </div>
              </div>
            </div>

            {/* 1st section */}
            <div className="w-[45%] hidden sm:flex justify-center items-center flex flex-col"
            style={{ backgroundImage: `url(${backgroundPng})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <img src={LoginSvg} className="h-75" />
              <div className="h-50 w-full text-center text-white" >
          <h1 className="text-3xl font-bold mt-5 sm:text-2xl">Hello, User!</h1>
          <p className="text-xl mt-5 lg:text-lg sm:text-base w-100 ml-30">Welcome back! Log in to continue exploring, manage your account, and pick up right where you left off with your favorite books.</p>
          </div>
            </div>
          </div>
        </>
  )}

export default Register
