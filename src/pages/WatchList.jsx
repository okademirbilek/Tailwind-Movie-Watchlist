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
        key={movie.imdbID}
        filmData={movie}
        onClick={deleteMovie}
        btnId="remove-btn"
        wantSpace={true}
      />
    );
  });

  return (
    <div className="container mx-auto pb-4 grid md:grid-cols-3 lg:grid-cols-4  mt-6 bg-slate-600 rounded-xl">
      {movieData.length === 0 ? (
        <div className="empty-watchlist">
          <p className="watchlist-text">
            Your watchlist is looking a little empty...
          </p>
          <span className="add-btn-container">
            <Link to="/">
              <h6 id="add-btn-link"></h6>
            </Link>
            <h5>Lets add some movies!</h5>
          </span>
        </div>
      ) : (
        watchListElement
      )}
    </div>
  );
}

export default WatchList;
