import React from "react";
import { FaSchool, FaCertificate } from "react-icons/fa";
import './aboutStyles.css';

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen p-2 bg-[#191919] text-white">
      <div className="w-full max-w-[1200px] mt-16 p-4 rounded-lg shadow-lg border-4 border-transparent bg-gray-900 animate-gradient-border">
        <div className="lg:flex lg:space-x-8">
          {/* About Section */}
          <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg mb-8 lg:mb-0">
            <div className="text-center mb-8">
              <h1 className="font-bold text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 animate-pulse">
                About Me
              </h1>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Jairo, a dedicated software developer focused on crafting innovative solutions. I excel in designing, developing, and maintaining high-quality applications and systems.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                My approach extends beyond just writing code. I aim to understand user needs and translate them into intuitive, functional products that enhance the user experience. My versatility with various technologies and methodologies allows me to adapt swiftly to new challenges in the development world.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                I highly value collaboration and teamwork. I thrive in multidisciplinary environments where I can learn and contribute diverse perspectives. My goal is to continue growing professionally and contribute to exciting, meaningful projects. I'm always open to new opportunities and challenges to expand my skills and make a difference in technology.
              </p>
            </div>
          </div>
          {/* Education Section */}
          <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h1 className="font-bold text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 animate-pulse">
                Education
              </h1>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
                <p className="text-[25px] text-gray-400">Fullstack Certification</p>
                <span className="flex w-[84px] h-[24px] text-[10px] font-bold rounded-xl bg-green-100 text-green-600 px-2 items-center justify-center mt-2 sm:mt-0">
                  Full Time
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
                <div className="flex items-center">
                  <FaSchool className="text-[#A7A7A7]" size={16} />
                  <p className="text-[12px] text-gray-400 ml-2">Funval Internacional</p>
                </div>
                <span className="text-[12px] text-gray-400 mt-2 sm:mt-0">Nov 2023 - Mar 2024</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
                <p className="text-[25px] text-gray-400">English B2-C1</p>
                <span className="flex w-[84px] h-[24px] text-[10px] font-bold rounded-xl bg-green-100 text-green-600 px-2 items-center justify-center mt-2 sm:mt-0">
                  Full Time
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
                <div className="flex items-center">
                  <FaCertificate className="text-[#A7A7A7]" size={16} />
                  <p className="text-[12px] text-gray-400 ml-2">E4CC</p>
                </div>
                <span className="text-[12px] text-gray-400 mt-2 sm:mt-0">Mar 2023 - Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
