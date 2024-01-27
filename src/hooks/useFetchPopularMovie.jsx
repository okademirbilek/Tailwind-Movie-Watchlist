import React from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../components/services/api";

// const useFetchPopularMovie = () => {
//   return useQuery({
//     queryKey: ["movie", "trending"],
//     queryFn: fetchPopularMovies,
//   });
// };
const useFetchPopularMovie = () => {
  return useInfiniteQuery({
    queryKey: ["infinite", "trending", "movies"],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage ? allPages.length + 1 : undefined;
      return nextPage;
    },
    queryFn: fetchPopularMovies,
  });
};

export default useFetchPopularMovie;
