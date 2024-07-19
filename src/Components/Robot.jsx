import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Yo from "../assets/me.webp";

function Robot({ expanded, setExpanded }) {
  const toggleOptions = () => {
    setExpanded(!expanded);
  };

  const items = [
    {
      href: "https://www.linkedin.com/in/jairo-noodli-castro-castillo-a9840a2b0/",
      Icon: FaLinkedin,
      alt: "LinkedIn",
      color: "text-blue-500",
    },
    {
      href: "https://wa.me/+50240378644",
      Icon: FaWhatsapp,
      alt: "WhatsApp",
      color: "text-green-500",
    },
    {
      href: "mailto:coderchissgan@gmail.com",
      Icon: FaEnvelope,
      alt: "Email",
      color: "text-red-500",
    },
  ];

  const DelayedItem = ({ children, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timeout);
    }, [delay]);

    return isVisible ? children : null;
  };

  return (
    <div className="fixed bottom-14 right-9 z-10">
      {expanded && (
        <div className="mt-2 rounded-lg shadow-md p-1 flex flex-col gap-3 transition-all duration-1000">
          {items.map((item, index) => (
            <DelayedItem key={index} delay={index * 300}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <item.Icon
                  className={`w-12 h-12 max-sm:w-[34px] max-sm:h-[34px] ${item.color}`}
                />
              </a>
            </DelayedItem>
          ))}
        </div>
      )}
      <div
        className={`w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse transform hover:scale-110 transition duration-500 max-sm:w-[43px] max-sm:h-[43px] ${
          expanded ? "rotate-180" : ""
        }`}
        onClick={toggleOptions}
      >
        <img
          src={Yo}
          alt="Robot"
          className="w-[50px] h-[50px] max-sm:w-[41px] max-sm:h-[40px] rounded-full transition"
        />
      </div>
    </div>
  );
}

export default Robot;
