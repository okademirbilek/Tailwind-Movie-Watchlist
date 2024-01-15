import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  const styles = isShown
    ? {
        boxShadow: "0px 0px 30px 0px white",
        opacity: 0.6,
        transform: "scale(1.1)",
      }
    : {};

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        className="carousel-img mx-auto my-8 w-[175px] h-[250px] rounded-xl  transition"
        style={styles}
        src={movie.img}
      ></img>
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
