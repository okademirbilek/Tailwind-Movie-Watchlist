import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopularMovieCart = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const styles = isShown
    ? {
        opacity: 0.6,
      }
    : {};
  return (
    <div
      className="flex flex-col items-center  relative w-[175px] h-[275px]  min-[420px]:w-[200px] min-[420px]:h-[300px] overflow-hidden group rounded-md hover:rounded-none"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {data.poster_path ? (
        <img
          className={`w-full h-full rounded-md max-w-none group-hover:scale-125  transition duration-500 `}
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          style={styles}
          alt=""
        />
      ) : (
        <img
          className="w-full h-full rounded-md max-w-none"
          src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
        />
      )}

      <div className="flex items-center justify-center w-full h-10 absolute bottom-0 bg-opacity-95 bg-zinc-950">
        <h2 className="max-w-[200px] truncate px-4">{data.original_title}</h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 right-1 rounded-md bg-opacity-95 bg-zinc-950">
        <h2 className="">⭐{data.vote_average.toFixed(1)}</h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 left-1 rounded-md bg-opacity-95 bg-zinc-950">
        <h2 className="">{data.release_date.slice(0, 4)}</h2>
      </div>

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
