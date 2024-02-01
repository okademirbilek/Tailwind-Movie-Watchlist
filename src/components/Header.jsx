import { Link } from "react-router-dom";
import WatchListIcon from "../assets/images/icons8-popcorn-4.png";
import avatar from "../assets/images/avatar-img.png";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  // const location = useLocation();
  const { currentUser } = useAuth();

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
      <Link to="/">
        <button className="glowing-btn">
          <span className="glowing-txt">
            MO<span className="faulty-letter">V</span>IE
          </span>
        </button>
      </Link>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        title="Inline logo for TMDB"
        alt="TMDB"
        className="hidden  lg:flex flex-shrink-0 lg:w-52 "
      />
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        title="Inline logo for TMDB"
        alt="TMDB"
        className=" flex flex-shrink-0 w-16 lg:hidden"
      />
      <nav className="flex justify-between items-center gap-4 md:gap-12">
        <Link className="flex items-center gap-2" to="/watchList">
          <h2 className="text-xl hidden md:block">Watchlist</h2>
          <img className="w-10 h-10 object-cover" src={WatchListIcon}></img>
        </Link>

        <Link to="/dashboard">
          <div className="flex items-center gap-2.5">
            <h5 className="text-xl hidden lg:block">
              {currentUser?.displayName || "MovieStar123"}
            </h5>
            <img
              src={avatar}
              className="w-10 h-10  bg-white rounded-full"
            ></img>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
