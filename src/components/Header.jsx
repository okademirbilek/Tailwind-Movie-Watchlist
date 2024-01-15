import { Link } from "react-router-dom";
import WatchListIcon from "../images/icons8-popcorn-4.png";
import avatar from "../images/avatar-img.png";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { currentUser } = useAuth();
  const location = useLocation();

  //if there is no user and your path is not defined and pathname update-profile
  //currentUser already handle the conditional render but incase i add the extra path
  if (
    !currentUser ||
    location.pathname === "/update-profile" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    (location.key === "default" && location.pathname !== "/")
  ) {
    return null;
  }

  return (
    <header className="w-full flex items-center justify-between pt-4 pb-6 px-4">
      <Link to="/">Movie</Link>
      <nav className="flex justify-between items-center gap-12">
        <Link className="flex items-center gap-2" to="/watchList">
          <h2 className="text-xl">MY WATCHLIST</h2>
          <img className="w-10 h-10" src={WatchListIcon}></img>
        </Link>
        <Link to="/dashboard">
          <div className="flex items-center gap-2">
            <img src={avatar} className="w-10 h-10"></img>
            <h5 className="text-xl">
              {currentUser?.displayName || "MovieStar123"}
            </h5>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
