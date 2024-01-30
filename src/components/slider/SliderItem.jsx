import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ movie }) => {
  console.log(movie);
  const [isShown, setIsShown] = useState(false);
  const styles = isShown
    ? {
        boxShadow: "0px 0px 30px 0px white",
        opacity: 0.6,
        transform: "scale(1.1)",
        transition: "ease",
      }
    : {};

  return (
    <div
      className="relative rounded-md  mx-auto my-8 w-[200px] h-[300px] md:w-[175px] md:h-[250px]   transition"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        className="carousel-img w-full h-full rounded-lg "
        style={styles}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      ></img>
      {!isShown && (
        <div className="flex items-center rounded-b-md justify-center w-full h-6 absolute bottom-0 bg-opacity-95 bg-zinc-950">
          <h2 className="px-4">{movie.release_date}</h2>
        </div>
      )}

      {isShown && (
        <Link to={`/details/${movie.id}`}>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://www.freepnglogos.com/uploads/play-button-png/play-button-ifa-1.png"
            width="100"
            alt="play button, ifa"
          />
        </Link>
      )}
    </div>
  );
};

SliderItem.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default SliderItem;
