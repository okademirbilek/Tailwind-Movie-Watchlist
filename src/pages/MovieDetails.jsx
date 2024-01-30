import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import useFetchDetailMovie from "../hooks/useFetchDetailMovie";

import MovieDetailCart from "../components/MovieDetailCart";

import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";

export default function MovieDetails() {
  const params = useParams();

  const { addNewMovie } = useAuth();

  const { data, isLoading, isError, error } = useFetchDetailMovie(params);

  return (
    <div className=" container mx-auto">
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      {data && (
        <MovieDetailCart
          key={data.id}
          onClick={addNewMovie}
          btnId="add-btn"
          data={data}
        />
      )}
    </div>
  );
}
