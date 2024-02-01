import { Link } from "react-router-dom";
import WatchListIcon from "../assets/images/icons8-popcorn-4.png";
import avatar from "../assets/images/avatar-img.png";
import { useLocation } from "react-router-dom";

function Header() {
  // const location = useLocation();

  //if there is no user and your path is not defined and pathname update-profile
  //currentUser already handle the conditional render but incase i add the extra path
  // if (
  //   location.pathname === "/update-profile" ||
  //   location.pathname === "/sign-up" ||
  //   location.pathname === "/login" ||
  //   location.pathname === "/forgot-password" ||
  //   (location.key === "default" && location.pathname !== "/")
  // )

  return (
    <header className="container mx-auto w-full flex items-center justify-between pt-4 pb-6 px-4">
      <Link className=" text-2xl" to="/">
        Movie
      </Link>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        title="Inline logo for TMDB"
        alt="TMDB"
        className="w-40 "
      />
      <nav className="flex justify-between items-center gap-12">
        <Link className="flex items-center gap-2" to="/watchList">
          <h2 className="text-xl hidden md:block">MY WATCHLIST</h2>
          <img className="w-10 h-10" src={WatchListIcon}></img>
        </Link>

        <Link to="/dashboard">
          <div className="flex items-center gap-2">
            <img src={avatar} className="w-10 h-10 bg-white rounded-full"></img>
            <h5 className="text-xl">
              {/* {currentUser?.displayName || "MovieStar123"} */}
            </h5>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
