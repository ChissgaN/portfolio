import React from "react";
import Stack from "./Stack";

const Techstack = () => {
  return (
    <div>
      <h2 className="w-[30%] mx-auto mt-[10%] text-5xl text-center font-semibold leading-tight  text-[#CCCCCC] max-md:text-[34px] max-sm:text-[26px]">
        My Tech Stack
      </h2>

      <p className="w-full text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 mt-4 text-2xl text-center mx-auto font-normal leading-7  max-md:text-[20px]">
        Technologies I’ve been working with recently
      </p>
      <div className=" py-[5%]   max-sm:h-[110px]">
        <Stack />
      </div>
    </div>
  );
};

export default Techstack;
