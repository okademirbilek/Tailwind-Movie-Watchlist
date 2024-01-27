import React from "react";
import { fetchUpcomingMovies } from "../components/services/api";
import { useQuery } from "@tanstack/react-query";

const useFetchUpcomingMovies = () => {
  return useQuery({
    queryKey: ["movie", "upcoming"],
    queryFn: fetchUpcomingMovies,
  });
};

export default useFetchUpcomingMovies;
