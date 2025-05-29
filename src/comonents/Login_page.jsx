import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../assets/logo.png'
// Using React Icons as mentioned in your profile

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col border">
      {/* Header */}
      <div className="bg-[#F26522] h-[60px] w-full flex items-center px-8">
        <img 
          src={logo} 
          alt="PROSYS CP" 
          className="h-[30px]"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-[400px] bg-white rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.1)] relative pt-[60px] pb-8 px-8">
          {/* Logo circle */}
          <div className="absolute -top-[50px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-[#F26522] flex items-center justify-center">
            <img 
              src={logo} 
              alt="PROSYS" 
              className="h-[50px] w-[50px]"
            />
          </div>

          {/* Form inputs */}
          <form className="space-y-6 mt-4">
            <div className="relative">
              <FaUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full border-b border-gray-300 pb-2 pl-8 focus:outline-none focus:border-[#F26522]"
              />
            </div>
            
            <div className="relative">
              <FaLock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 pb-2 pl-8 focus:outline-none focus:border-[#F26522]"
              />
            </div>
            
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-400 hover:text-[#F26522]">
                Forgot Password?
              </a>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#F26522] text-white py-2 px-8 rounded-full hover:bg-[#e05d1d] focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-opacity-50"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
