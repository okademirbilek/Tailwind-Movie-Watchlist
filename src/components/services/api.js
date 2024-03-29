const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN;

export const fetchPopularMovies = async ({ pageParam }) => {
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
  // `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.desc`,
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-02-01&release_date.lte=2024-06-20&sort_by=popularity.desc`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
        Authorization: `Bearer ${accessToken}`,
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
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&append_to_response=alternative_titles,videos,changes,credits,images,keywords,lists,releases,reviews,similar,translations, `
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const fetchPersonDetail = async (params) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${params.personId}?language=en-US&append_to_response=movie_credits,images,latest,popular,tv_credits`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
