import React from "react";

import VideoIframe from "./VideoIframe";

import { SampleNextArrow, SamplePrevArrow } from "./slider/CustomSliderArrows";

import Slider from "react-slick";
import "./slider/slick.css";
import "./slider/slick-theme.css";

const WatchTrailer = ({ data, setIsShown }) => {
  const filterData = data.filter((item) => {
    return item.name.includes("Trailer");
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 800,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {filterData.length > 0 ? (
        <div className="w-full md:max-w-[560px] xl:max-w-[1140px]   relative">
          <button
            className="bg-black bg-opacity-65 w-fit h-fit absolute top-0 right-0 z-30"
            onClick={() => setIsShown(false)}
          >
            Close
          </button>

          <Slider {...settings}>
            {filterData.map((movie) => (
              <VideoIframe key={movie.key} data={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        <h1>No Trailer</h1>
      )}
    </>
  );
};

export default WatchTrailer;
