import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import useFetchDetailMovie from "../hooks/useFetchDetailMovie";

import MovieCart from "../components/MovieCart";

import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";

export default function MovieDetails() {
  const params = useParams();

  const { addNewMovie } = useAuth();

  const { data, isLoading, isError, error } = useFetchDetailMovie(params);

  return (
    <div className="movie-detail-container">
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      {data && (
        <MovieCart
          key={data.id}
          onClick={addNewMovie}
          btnId="add-btn"
          filmData={data}
        />
      )}
    </div>
  );
}
