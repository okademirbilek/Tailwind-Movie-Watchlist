import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";

function MovieCart({ filmData, onClick, btnId }) {
  const { movieData } = useAuth();
  const [isShown, setIsShown] = useState(false);

  //check if the movie already in watchlist
  const isExist =
    btnId === "add-btn" &&
    movieData.some((filmList) => filmList.id === filmData.id);

  const styles = isShown
    ? {
        opacity: 0.6,
      }
    : {};

  //to use this component in 2 places we control the firebase id to
  //delete correct data when we use this component in watchlist

  const detail = btnId === "add-btn" ? filmData : filmData.firebaseId;

  return (
    <div
      className="flex flex-col items-center mx-auto my-3  relative w-[175px] h-[275px]  min-[420px]:w-[200px] min-[420px]:h-[300px] overflow-hidden group rounded-md hover:rounded-none"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {filmData.poster_path ? (
        <img
          className={`w-full h-full rounded-md max-w-none group-hover:scale-125  transition duration-500 `}
          src={`https://image.tmdb.org/t/p/original/${filmData.poster_path}`}
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
        <h2 className="max-w-[200px] truncate px-4">
          {filmData.original_title}
        </h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 right-1 rounded-md bg-opacity-95 bg-zinc-950">
        <h2 className="">⭐{filmData.vote_average.toFixed(1)}</h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 left-12 md:left-16 rounded-md bg-opacity-95 bg-zinc-950">
        <h2 className="">{filmData.release_date.slice(0, 4)}</h2>
      </div>

      {isShown && (
        <Link to={`/details/${filmData.id}`}>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://www.freepnglogos.com/uploads/play-button-png/play-button-ifa-1.png"
            width="100"
            alt="play button, ifa"
          />
        </Link>
      )}

      <button
        onClick={() => onClick(detail)}
        disabled={isExist}
        className={` absolute top-1 left-1 w-8 h-8 rounded-full disabled:bg-slate-600 disabled:cursor-default  ${
          btnId === "add-btn"
            ? "add-btn bg-add-btn"
            : "remove-btn bg-remove-btn"
        }`}
      ></button>
    </div>
  );
}

export default MovieCart;
