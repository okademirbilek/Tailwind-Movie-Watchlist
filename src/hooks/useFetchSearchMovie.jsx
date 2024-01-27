import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchMovie } from "../components/services/api";

const useFetchSearchMovie = (params, currentPage, currentMovieName) => {
  return useQuery({
    queryKey: [
      "movie",
      currentPage,
      currentMovieName,
      params.movie,
      params.page,
    ],
    keepPreviousData: true,
    queryFn: () => fetchSearchMovie(params, currentMovieName, currentPage),
  });
};

export default useFetchSearchMovie;
