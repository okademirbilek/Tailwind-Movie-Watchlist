import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDetailMovie } from "../components/api/api";

const useFetchDetailMovie = (params) => {
  return useQuery({
    queryKey: ["movie", params.id],
    queryFn: () => fetchDetailMovie(params),
  });
};

export default useFetchDetailMovie;
