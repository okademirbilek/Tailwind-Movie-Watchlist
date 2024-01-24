import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../components/api/api";

const useFetchPopularMovie = () => {
  return useQuery({
    queryKey: ["movie", "trending"],
    queryFn: fetchPopularMovies,
  });
};

export default useFetchPopularMovie;
