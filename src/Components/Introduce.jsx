import React from 'react'
import foto from '../assets/me.webp'

const Introduce = () => {
  return (
    <section
          id="home"
          className="h-full w-[80%] flex justify-between items-center mt-[10%] text-white mx-auto md:bg-[#191919] lg:bg-[#191919] "
        >
          <h1
            className="text-5xl text-start max-md:text-[26px] max-lg:text-[38px]"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <p className="flex ">
              Hi <p className=" animate-bounce">👋</p>,
            </p>
            <p>I´m not a robot! </p>
            My name is <br />
            <p className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 p-0 m-0 mt-2">
              Jairo Castro Castillo
            </p>
            I build things for web
          </h1>
          <div
            className="rounded-full h-96 w-96 p-1 bg-gradient-to-r from-pink-500 to-blue-600 max-md:w-[236px] max-md:h-[236px] max-lg:w-[310px] max-lg:h-[310px] max-sm:w-[160px] max-sm:h-[160px]"
            data-aos="fade-down-left"
            data-aos-duration="2000"
          >
            <img
              src={foto}
              alt=""
              className="rounded-full h-full w-full object-cover border-4 border-transparent transform hover:scale-105 transition duration-300 ease-in-out  "
            />
          </div>
        </section>
  )
}

export default Introduce
