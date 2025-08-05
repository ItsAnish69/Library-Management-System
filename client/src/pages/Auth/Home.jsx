import React from "react"
import backgroundPng from "../../assets/svgs/background.png";
import Image1 from '../../assets/images/img1.jpg'
import Image2 from '../../assets/images/img2.jpg'
import Image3 from '../../assets/images/img3.jpg'



const Home = () => {
    return <>
        <div className="w-full h-screen">
            {/* first section */}
            <div className="w-full h-20">
                <nav className="w-full h-full flex border md:border-0 border-[#F25D5D] justify-between items-center px-5 sm:px-20 bg-white">
                    <h1 className="font-bold text-3xl">BookHub</h1>
                    <ul className="flex sm:flex-row gap-4 sm:gap-20 font-bold text-xl text-center">
                        <li className="cursor-pointer hover:text-[#F25D5D]">Home</li>
                        <li className="cursor-pointer hover:text-[#F25D5D]">Books</li>
                        <li className="cursor-pointer hover:text-[#F25D5D]">About Us</li>
                    </ul>
                    <div className="flex gap-3 sm:gap-5 text-white font-bold mt-3 sm:mt-0">
                        <button className="bg-[#F25D5D] hover:bg-[#000] transition-all duration-200 px-4 py-2 rounded-lg">Log In</button>
                        <button className="bg-[#F25D5D] hover:bg-[#000] transition-all duration-200 px-4 py-2 rounded-lg">Sign Up</button>
                    </div>
                </nav>
            </div>

            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between p-5 sm:p-10"
                style={{ backgroundImage: `url(${backgroundPng})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                {/* text container */}
                <div className="w-full sm:w-1/2 p-5 sm:px-10 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">Trying to Look for that perfect Book?</h1>
                    <p className="mt-5 text-white text-base sm:text-lg">
                        "Discover your next favorite read from our handpicked collection. Whether you're into thrilling mysteries,
                        heartwarming romances, or inspiring non-fiction, we've got the perfect book waiting for you."
                    </p>
                    <button className="w-auto text-white font-bold px-6 py-3 mt-5 rounded-3xl bg-[#F25D5D] hover:bg-[#fff] hover:text-[#F25D5D] transition-all duration-200 cursor-pointer">
                        Browse Collection
                    </button>
                </div>

                {/* image container */}
                <div className="w-full sm:w-1/2 flex justify-center items-center mt-10 sm:mt-0">
                    <div className="flex justify-center items-center gap-2 sm:gap-5 flex-wrap">
                        <img src={Image1} alt="Book Img" className="w-[100px] sm:w-[150px] rounded-[10px]" />
                        <img src={Image2} alt="Book Img" className="w-[100px] sm:w-[150px] rounded-[10px]" />
                        <img src={Image3} alt="Book Img" className="w-[100px] sm:w-[150px] rounded-[10px]" />
                    </div>
                </div>
            </div>

            {/* featured section */}
            <div className="w-full flex flex-col items-center justify-center p-5 bg-[#f8f8f8]">
                <div className="w-full h-30 flex flex-col justify-center items-center gap-3 ">
                    <h1 className="font-bold text-3xl ">Featured Books</h1>
                    <p className="text-base w-85 sm:text-lg">"Explore our top picks—bestsellers and must-reads specially curated just for you."</p>
                </div>
                <div className="w-full flex justify-between p-5 sm:p-10 gap-5 flex-wrap">
                        <img src={Image1} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image2} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image3} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image3} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                </div>
                <div className="w-full flex justify-between p-5 sm:p-10 gap-5 flex-wrap">
                        <img src={Image1} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image2} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image3} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                        <img src={Image3} alt="Book Img" className="w-[100px] sm:w-[200px] rounded-[10px]" />
                </div>
            </div>
        </div>
    </>
}


export default Home;