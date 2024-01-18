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

  //check if the movie already in watchlist
  const isExist =
    btnId === "add-btn" &&
    movieData.some((filmList) => filmList.id === filmData.id);
  console.log(isExist);

  //to use this component in 2 places we control the firebase id to
  //delete correct data when we use this component in watchlist

  const detail = btnId === "add-btn" ? filmData : filmData.firebaseId;

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
          {filmData.poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${filmData.poster_path}`}
              className="w-[200px] h-[300px] rounded-md  max-w-none"
              alt={`${filmData.Title} Poster`}
            />
          ) : (
            <img
              className="w-[200px] h-[300px] rounded-md max-w-none"
              src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
            />
          )}
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
            className={` absolute top-10 left-3 w-8 h-8 rounded-full disabled:bg-slate-600 disabled:cursor-default  ${
              btnId === "add-btn"
                ? "add-btn bg-add-btn"
                : "remove-btn bg-remove-btn"
            }`}
          ></button>
        </div>
      </div>
    </>
  );
}

export default MovieCart;
