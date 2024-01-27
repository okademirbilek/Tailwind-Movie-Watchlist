import React from "react";

import PopularMovieCart from "./PopularMovieCart";
import useFetchPopularMovie from "../hooks/useFetchPopularMovie";

import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";

function PopularMovies() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useFetchPopularMovie();

  if (data && !isLoading) {
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center md:my-8 md:py-4 rounded-lg  md:mx-0  ">
      <h2 className="text-3xl my-4 lg:my-8 text-center">Trending Movies </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
        {isLoading && <LoadingDisplay />}
        {isError && <ErrorDisplay error={error} />}
        {data &&
          // you can move this part to another component
          data.pages.map((item) =>
            item.results.map((item) => (
              <PopularMovieCart key={item.id} data={item} />
            ))
          )}
        {hasNextPage && (
          <button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default PopularMovies;
