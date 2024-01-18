import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopularMovieCart = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  // console.log(data);
  return (
    <div
      className="flex flex-col items-center px-2 relative w-fit"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {data.poster_path ? (
        <img
          className="w-[233px] h-[350px] rounded-md max-w-none"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
      ) : (
        <img
          className="w-[233px] h-[350px] rounded-md max-w-none"
          src="https://www.omdbapi.com/src/poster.jpg"
        />
      )}
      <h2 className="max-w-[200px]">{data.original_title}</h2>
      {isShown && (
        <Link to={`/details/${data.id}`}>
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

export default PopularMovieCart;
