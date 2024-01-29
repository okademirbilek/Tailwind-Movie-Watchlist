import React from "react";

import PopularMovieCart from "./PopularMovieCart";
import useFetchPopularMovie from "../hooks/useFetchPopularMovie";

import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import Skeleton from "./Skeleton";

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

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col justify-center items-center   rounded-lg  md:mx-0  ">
      <h2 className="text-3xl my-4 lg:mt-4 lg:mb-6  text-center">
        Trending Movies{" "}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
        {isLoading && arr.map((item) => <Skeleton key={item} />)}
        {isError && <ErrorDisplay error={error} />}
        {data &&
          // you can move this part to another component
          data.pages.map((item) =>
            item.results.map((item) => (
              <PopularMovieCart key={item.id} data={item} />
            ))
          )}
      </div>

      {hasNextPage && (
        <div>
          <button
            className="mt-4 outline-none bg-slate-700 px-2 py-1 rounded-sm hover:bg-slate-500"
            onClick={() => fetchNextPage()}
          >
            {!isFetchingNextPage && "Load More"}
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
            {isFetchingNextPage && arr.map((item) => <Skeleton key={item} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
