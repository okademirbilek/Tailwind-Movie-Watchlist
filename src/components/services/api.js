import React from "react";

const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN;
const token2 = import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN2;

const token1 = import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN1;

export const fetchPopularMovies = async ({ pageParam }) => {
  console.log("pageParam", pageParam);
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?page=${pageParam}`,
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
  const data = await response.json();
  return data;
};

export const fetchUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.desc`,
    {
      headers: {
        Authorization: `Bearer ${token2}`,
        accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchSearchMovie = async (
  params,
  currentMovieName,
  currentPage
) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${
      params?.movie || currentMovieName
    }&language=en-US&page=${params?.page || currentPage}&api_key=${apiKey}`,
    {
      headers: {
        Authorization: `Bearer ${token1}`,
        accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchDetailMovie = async (params) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}&append_to_response=videos,images?api_key=${apiKey}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjYwMDJjZDBjODBhMzliYjE0N2JjNDhlMGI0Njg4NSIsInN1YiI6IjY0Mzk0YWQ5MWQ1Mzg2MDBmNDBmZDg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._G-3ZRhcRj7sNgeUdOJgszgcbSqXcTuyDBqaMUOKYr8`,
        accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
