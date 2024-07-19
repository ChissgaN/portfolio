import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "./CardProject";
import EcZ from "../../assets/ecomerceZapatos.webp";
import ABB from "../../assets/AirBnB.webp";
import Temp from "../../assets/Clima.png";
import poke from "../../assets/pokedex.webp";

function CarouselSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex w-[80%] gap-[5%] mx-auto">
      <div className="px-4 text-center">
        <CardProject
          foto={ABB}
          titulo={"WindBnB"}
          desc={
            "The platform offers a seamless and convenient way for users to discover, book, and manage accommodations for their travels. Provides detailed property information to help users make decisions."
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://windbnbjncc.netlify.app/"}
          url2={"https://github.com/ChissgaN/miniProject3.git"}
        />
      </div>
      <div className="px-4 text-center">
        <CardProject
          foto={Temp}
          titulo={"App-Temperature"}
          desc={
            "The weather forecasting website provides users with accurate and up-to-date weather information for locations worldwide. Users can easily access current weather conditions."
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://weatherappjncc.netlify.app/"}
          url2={"https://github.com/ChissgaN/pf3JNCC.git"}
        />
      </div>
      <div className="px-4 text-center">
        <CardProject
          foto={EcZ}
          titulo={"E-Commerce"}
          desc={
            "I have replicated a footwear e-commerce, with an intuitive and minimalist user interface to buy and sell, with detailed descriptions of the products and images, it has a shopping cart to add or delete items"
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://ecommercejncc.netlify.app/"}
          url2={"https://github.com/ChissgaN/ecommerce.git"}
        />
      </div>
      <div className="px-4 text-center">
        <CardProject
          foto={poke}
          titulo={"Pokédex"}
          desc={
            "Explore my Pokédex website. Powered with the PokeAPI, my site features detailed entries and images for a collection of Pokémon species. It's easy to discover information about your favorite Pokémon."
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://pokedexjncc.netlify.app/"}
          url2={"https://github.com/ChissgaN/pokedex.git"}
        />
      </div>
    </Slider>
  );
}

export default CarouselSlider;
