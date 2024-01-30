import { Link } from "react-router-dom";
import MovieCart from "../components/MovieCart";
import { useAuth } from "../context/AuthContext";

function WatchList() {
  const { movieData, deleteMovie } = useAuth();

  //we could copy of that movie data and the sort if you dont want to modify movie data
  const sortedMovieData = movieData.sort((a, b) => b.updatedAt - a.updatedAt);

  const watchListElement = sortedMovieData.map((movie) => {
    return (
      <MovieCart
        key={movie.id}
        filmData={movie}
        onClick={deleteMovie}
        btnId="remove-btn"
        wantSpace={true}
      />
    );
  });

  return (
    <div
      className={`container mx-auto ${
        movieData.length === 0
          ? "flex items-center justify-center"
          : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
      } py-4  mt-6 bg-slate-800 rounded-xl`}
    >
      {movieData.length === 0 ? (
        <div className="empty-watchlist flex flex-col gap-5 items-center justify-center  ">
          <p className="mt-5 text-2xl">
            Your watchlist is looking a little empty ...
          </p>
          <span className="flex gap-2">
            <Link
              className="flex items-center justify-center w-7 h-7 rounded-full add-btn bg-add-btn text-white"
              to="/"
            ></Link>
            <h5 className=" text-xl">Lets add some movies!</h5>
          </span>
        </div>
      ) : (
        watchListElement
      )}
    </div>
  );
}

export default WatchList;
