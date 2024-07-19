import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from "react-icons/fa";
import { SiLaravel, SiTailwindcss, SiGithub, SiGit } from "react-icons/si";

export default function Infoicon() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000, 
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 mx-auto px-auto">
      <Slider {...settings}>
        <div className=" w-[74px] h-[74px]">
          <FaHtml5 size={74} color="#E34F26" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <FaCss3Alt size={74} color="#264DE4" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <FaJs size={74} color="#F0DB4F" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <FaReact size={74} color="#61DAFB" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <FaPhp size={74} color="#777BB4" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <SiLaravel size={74} color="#FF2D20" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <SiTailwindcss size={74} color="#38B2AC" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <SiGithub size={74} color="#6e5494" />
        </div>
        <div className=" w-[74px] h-[74px]">
          <SiGit size={74} color="#F1502F" />
        </div>
      </Slider>
    </div>
  );
}
