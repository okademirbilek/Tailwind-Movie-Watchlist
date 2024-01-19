import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PopularMovieCart from "./PopularMovieCart";

const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN;

function PopularMovies() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", "trending"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week`,
        {
          headers: {
            Authorization: `Bearer ${accessToken} `,
            accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

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
