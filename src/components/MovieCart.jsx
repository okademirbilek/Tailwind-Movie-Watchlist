import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";

function MovieCart({
  filmData,
  onClick,
  btnId,
  wantSpace = false,
  detailPage = true,
}) {
  const { movieData } = useAuth();
  //check if the film already in the watchlist
  let isExist = null;
  if (btnId === "add-btn") {
    isExist = movieData.some(
      (filmList) => filmList["imdbID"] === filmData.imdbID
    );
  }

  const detail = btnId === "add-btn" ? filmData : filmData.id;

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {/* {wantSpace && <hr></hr>} */}
      <div className="flex flex-col md:flex-row  my-10 ml-2 md:mt-10 md:ml-8">
        <div
          className="relative w-fit"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {filmData.Poster !== "N/A" ? (
            <img
              src={filmData.Poster}
              className="w-[200px] h-[300px] rounded-md  max-w-none"
              alt={`${filmData.Title} Poster`}
            />
          ) : (
            <img
              className="w-[200px] h-[300px] rounded-md max-w-none"
              src="https://www.omdbapi.com/src/poster.jpg"
            />
          )}
          {isShown && (
            <Link to={`/details/${filmData.imdbID}`}>
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src="https://www.freepnglogos.com/uploads/play-button-png/play-button-ifa-1.png"
                width="100"
                alt="play button, ifa"
              />
            </Link>
          )}

          <div className="flex absolute top-0 right-0 px-1 mx-1 my-0.5 rounded-md bg-orange-500">
            <p>⭐</p>
            <h5>{filmData.imdbRating}</h5>
          </div>
          <div className="absolute top-0 left-0 px-1 mx-1 my-0.5 rounded-md bg-lime-400">
            <h4>{filmData.Runtime}</h4>
          </div>
          {isShown ? (
            <div className="absolute bottom-0 left-0  bg-red-800 w-full text-center rounded-b-md">
              <h5>{filmData.Genre}</h5>
            </div>
          ) : null}

          <button
            onClick={() => onClick(detail)}
            disabled={isExist}
            className={` absolute top-10 left-3 w-8 h-8 rounded-full disabled:bg-slate-600 disabled:cursor-default  ${
              btnId === "add-btn"
                ? "add-btn bg-add-btn"
                : "remove-btn bg-remove-btn"
            }`}
          ></button>
        </div>

        {/* <div className="flex gap-1">
            <h3>{filmData.Title}</h3>
          </div> */}

        {/* {detailPage ? (
            <div className="detail-link">
              <Link to={`/details/${filmData.imdbID}`}>Go to detail page</Link>
            </div>
          ) : null} */}

        {/* <div className="hidden md:flex">
            <p>{filmData.Plot}</p>
          </div> */}
      </div>
    </>
  );
}

export default MovieCart;
