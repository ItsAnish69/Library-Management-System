//rafce
import ProfileSvg from "../../assets/svgs/profile.svg";
import backgroundPng from "../../assets/svgs/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {useState} from 'react';
import axios from "axios";




const Login = () => {

  //sets the user data 
  const [userData, setUserData] = useState({
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
      const reponse = await axios.post('http://localhost:3000/api/user/login', userData);
      const token = reponse.token;
      localStorage.getItem("token", token)
      alert("Login successfull")
    }


  return (
    <>
      <div className="h-screen w-full flex">
        {/* 1st section */}
        <div className="w-[45%] hidden sm:flex justify-center p-20 felx flex-col items-center"
         style={{ backgroundImage: `url(${backgroundPng})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={ProfileSvg} className="h-80" />
          <div className="h-50 w-full text-center text-white" >
          <h1 className="text-3xl font-bold mt-5">Hello, User!</h1>
          <p className="text-xl mt-5">Welcome back! Log in to continue exploring, manage your account, and pick up right where you left off with your favorite books.</p>
          </div>
        </div>

        <div className="w-full sm:w-[55%] flex justify-center items-center px-8 sm:px-20 py-24">
          {/* log in contain garne div */}
          <div className="h-full w-full flex flex-col justify-center items-center gap-12">
            {/* heading wala section */}
            <div className="text-center">
              <h1 className="font-bold text-5xl">Log In</h1>
              <p className="mt-3 text-lg">
                If you have not logged in yet, Now is the time!
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
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  className="bg-[#EAE9E9] rounded-2xl w-full p-4"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* <FaLock size={40} /> */}
                <FontAwesomeIcon icon={faLock} fontSize={25} />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  className="bg-[#EAE9E9] rounded-2xl w-full p-4"
                />
              </div>

              <button className="font-bold p-4 ml-9 rounded-2xl text-white cursor-pointer bg-[#F25D5D] hover:bg-[#000] transition-all duration-200">
                Log In
              </button>
            </form>

            {/* sign up with */}
            <div className="text-center border-gray-300 p-2 ml-5 rounded-2xl w-full sm:w-96">
              <p>Or sign up with</p>
              <div className="flex gap-2 justify-center mt-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
