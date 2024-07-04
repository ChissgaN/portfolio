import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import icono from "../../public/logo.png";

const NavBar = ({ nom, url, onClick, hidden }) => {
  return (
    <a
      href={url}
      onClick={onClick}
      className={`bg-gradient-to-r hover:from-pink-600 hover:to-blue-500 hover:scale-110 duration-[200ms] hover:pb-1 ease-in-out px-3 py-[1px] rounded-md ${
        hidden ? "hidden md:block" : ""
      }`}
    >
      {nom}
    </a>
  );
};

const Navbar = ({ toggleAbout, toggleRobot }) => {
  const [robotExpanded, setRobotExpanded] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault();
    toggleRobot();
    setRobotExpanded(true);
  };

  return (
    <div className="flex justify-between items-center bg-[#191919] text-[#A7A7A7] w-full">
      <img
        className="hover:scale-110 transition duration-200 ease-in-out pl-[10%] md:w-[275px] md:h-[100px] max-md:w-[225px] max-md:h-14"
        src={icono}
        alt="Logo"
      />

      <div className="flex w-[98%] gap-[5%] text-[18px] items-center justify-center">
        <NavBar nom="Home" url="#home" hidden={true} />
        <NavBar nom="About" url="#about" onClick={toggleAbout} />
        <NavBar nom="Projects" url="#projects" />
        <NavBar nom="Contact" url="#" onClick={handleContactClick} hidden={true} />
      </div>

      <div className="flex gap-[12%] pr-[10%] max-sm:h-[28px] max-sm:pr-[13%]">
        <a
          href="https://github.com/ChissgaN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-[35px] w-[35px] text-[#E8489A] hover:text-blue-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/jairo-noodli-castro-castillo-a9840a2b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-[35px] w-[35px] text-[#2662EA] hover:text-blue-500" />
        </a>
        <a
          href="https://www.instagram.com/chissgan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="max-md:hidden transform hover:scale-[1.2] transition duration-300 ease-in-out h-[35px] w-[35px] text-[#E1306C] hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
