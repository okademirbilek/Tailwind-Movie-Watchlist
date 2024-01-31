import React, { useMemo } from "react";

import VideoIframe from "./VideoIframe";

import { SampleNextArrow, SamplePrevArrow } from "./slider/CustomSliderArrows";

import Slider from "react-slick";
import "./slider/slick.css";
import "./slider/slick-theme.css";

import { stopVideos } from "../utils/utils";

const WatchTrailer = ({ data, setIsShown }) => {
  // const filterData = data.filter((item) => {
  //   return item.name.includes("Trailer");
  // });
  const filterData = useMemo(() => {
    return data.filter((item) => item.name.includes("Trailer"));
  }, [data]);

  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    // autoplaySpeed: 2500,
    speed: 800,
    // pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prevSlide, currentSlide) => stopVideos(prevSlide),
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
        <div className="w-full md:max-w-[560px] xl:max-w-[1140px] relative ">
          <div
            onClick={() => setIsShown(false)}
            className="close-container cursor-pointer absolute -top-5 right-7  z-50"
          >
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>

          <Slider {...settings}>
            {filterData.map((movie, index) => (
              <VideoIframe key={movie.key} index={index} data={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        <h1 className="text-2xl">No Trailer</h1>
      )}
    </>
  );
};

export default WatchTrailer;
