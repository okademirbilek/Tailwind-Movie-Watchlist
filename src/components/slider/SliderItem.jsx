import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  // const styles = isShown
  //   ? {
  //       boxShadow: "0px 0px 30px 0px white",
  //       opacity: 0.6,
  //       transform: "scale(1.1)",
  //       transition: "ease",
  //     }
  //   : {};

  const styles = isShown
    ? {
        opacity: 0.6,
      }
    : {};

  return (
    <div
      className="flex flex-col items-center mx-auto my-6 relative w-[175px] h-[275px]  min-[420px]:w-[200px] min-[420px]:h-[300px] overflow-hidden group rounded-md hover:rounded-none"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {movie.poster_path ? (
        <img
          className={`w-full h-full rounded-md max-w-none group-hover:scale-125  transition duration-500 `}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          style={styles}
          alt=""
        />
      ) : (
        <img
          className="w-full h-full rounded-md max-w-none"
          src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
        />
      )}

      <div className="flex flex-col overflow-hidden items-center rounded-b-md justify-center w-full h-fit absolute bottom-0 bg-opacity-95 bg-zinc-950">
        <h2 className="px-4 truncate max-w-[200px]  text-yellow-500">
          {movie.title}
        </h2>
        <h2 className="px-4 text-sm">{movie.release_date}</h2>
      </div>

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
