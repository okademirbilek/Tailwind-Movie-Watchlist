import Slider from "react-slick";
import SliderItem from "./SliderItem";
import useFetchUpcomingMovies from "../../hooks/useFetchUpcomingMovies";

import LoadingDisplay from "../LoadingDisplay";
import ErrorDisplay from "../ErrorDisplay";

import "./slick.css";
import "./slick-theme.css";

import { SampleNextArrow, SamplePrevArrow } from "./CustomSliderArrows";

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1185,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const { data, isLoading, isError, error } = useFetchUpcomingMovies();

  return (
    <div className="relative">
      <div className="shadow-sm bg-black bg-opacity-50  text-2xl w-fit rounded-md  -rotate-12 px-4 py-1 absolute -top-6 -left-16     md:-top-5 md:-left-16">
        Upcoming
      </div>
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      {data && (
        <Slider {...settings}>
          {data.results.map((movie) => (
            <SliderItem key={movie.id} movie={movie} />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SlickSlider;
