import { useState, useRef } from "react";

import SearchBar from "../components/SearchBar.jsx";

import SlickSlider from "../components/SlickSlider.jsx";

import { Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Home() {
  const [currentMovieName, setCurrentMovieName] = useState("");

  const focusDiv = useRef(null);

  const location = useLocation();

  return (
    <>
      {(location.key === "default" && location.pathname === "/") ||
      location.key !== "default" ? (
        <>
          <SearchBar
            setCurrentMovieName={setCurrentMovieName}
            focusDiv={focusDiv}
          />
          <div
            className="container mx-auto my-4 lg:w-8/12  bg-[#242424] rounded-xl"
            ref={focusDiv}
          >
            <SlickSlider />
          </div>
        </>
      ) : null}

      <main>
        <Outlet
          context={{
            focusDiv,
            currentMovieName,
            setCurrentMovieName,
          }}
        />
      </main>
    </>
  );
}

export default Home;
