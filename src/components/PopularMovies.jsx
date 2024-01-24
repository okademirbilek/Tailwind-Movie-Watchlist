import React, { useState } from "react";

import PopularMovieCart from "./PopularMovieCart";
import useFetchPopularMovie from "../hooks/useFetchPopularMovie";

function PopularMovies() {
  const { data, isLoading, isError, error } = useFetchPopularMovie();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center md:my-8 md:py-4 rounded-lg  md:mx-0  ">
      <h2 className="text-3xl my-4 lg:my-8 text-center">Trending Movies </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
        {data.results.map((item) => (
          <PopularMovieCart key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
