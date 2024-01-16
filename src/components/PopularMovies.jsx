import React from "react";
import { Link } from "react-router-dom";

function PopularMovies(props) {
  return (
    <div className="flex  rounded-lg mx-4 md:mx-0  bg-[#242424]">
      <Link to={`/details/${props.movie.id}`}>
        <img
          className="cursor-pointer flex flex-shrink-0 max-w-none w-[150px] h-[250px] rounded-lg"
          src={props.movie.img}
        ></img>
      </Link>
      <div className="flex flex-col  pt-2 px-5 justify-around">
        <div className="">
          <p className="text-ellipsis whitespace-pre-wrap overflow-hidden ">
            {props.movie.title}
          </p>
        </div>
        <p>Year: {props.movie.year}</p>
        <div>
          <p className="text-ellipsis overflow-hidden whitespace-pre-wrap">
            {props.movie.directedBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;
