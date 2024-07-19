// CardProject.jsx
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function CardProject({ foto, titulo, desc, tec, url, url2 }) {

  return (
    <>
      <div>


        <div className="mb-[10%] transform  bg-[#363636] w-full rounded-xl shadow hover:shadow-2xl">
          <article className="h-[255px] w-full">
            <img
              src={foto}
              alt=""
              className="rounded-t-2xl h-full w-full"
              
            />
          </article>
          <article className="textOnCards w-[90%] mx-auto">
            <header className="text-center text-[28px] mt-2 font-semibold text-[#CCCCCC]">
              {titulo}
            </header>
            <p className="text-[18px] mx-5 text-[#CCCCCC] my-3 max-w-[300px] max-h-[185px] overflow-hidden">
              {desc}
            </p>
            <div className="w-full flex mx-auto text-[#CCCCCC] justify-center items-center gap-1">
              <p className="font-semibold text-[14px]">Tech Stack: </p>
              <p className="text-[10px] h-5 flex items-center justify-center pt-1">
                {tec}
              </p>
            </div>
            <article className="flex justify-around mt-4 gap-[10%] w-[90%] mx-auto text-[12px] text-[#FFFFFF] underline pb-[10%]">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex transform hover:scale-110 transition duration-300 ease-in-out hover:text-white text-blue-600 font-medium"
              >
                <FaExternalLinkAlt className="pr-[8%]" size={20} />
                Live Preview
              </a>
              <a
                href={url2}
                className="flex transform hover:scale-110 transition duration-300 ease-in-out hover:text-white text-blue-600 font-medium"
              >
                <FaGithub className="pr-[8%]" size={20} />
                View Code
              </a>
            </article>
          </article>
        </div>
      </div>
    </>
  );
}
