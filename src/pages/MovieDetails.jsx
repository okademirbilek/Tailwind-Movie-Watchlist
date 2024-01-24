import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import useFetchDetailMovie from "../hooks/useFetchDetailMovie";

import MovieCart from "../components/MovieCart";

export default function MovieDetails() {
  const [onToggle, setOnToggle] = useState(false);
  const params = useParams();

  const { addNewMovie } = useAuth();

  const { data, isLoading, isError, error } = useFetchDetailMovie(params);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (!isLoading) {
    console.log(data);
  }

  if (isError) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  function hanleClick() {
    setOnToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="movie-detail-container">
      <MovieCart
        key={data.id}
        onClick={addNewMovie}
        btnId="add-btn"
        filmData={data}
      />
    </div>
  );
}
