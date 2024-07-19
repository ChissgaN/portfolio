import React from "react";
import CarouselSlider from "./CarouselSlider";

function ProjectContainer() {
  return (
    <div className="text-[#CCCCCC] my-[5%] text-center text-[48px] font-semibold max-md:text-[38px]">
      Projects
      <p className="text-[#A7A7A7] my-[2%] text-center text-[32px] font-medium max-md:text-[26px]">
        Things I’ve built so far
      </p>
      <CarouselSlider />
    </div>
  );
}

export default ProjectContainer;
