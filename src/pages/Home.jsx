import { useState, useRef } from "react";

import SearchBar from "../components/SearchBar.jsx";

import SlickSlider from "../components/slider/SlickSlider.jsx";

import { Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Home() {
  const [currentMovieName, setCurrentMovieName] = useState("");

  const focusDiv = useRef(null);

  const location = useLocation();

  return (
    <div className="container mx-auto   pb-6 rounded-xl bg-slate-800">
      {(location.key === "default" && location.pathname === "/") ||
      location.key !== "default" ? (
        <div>
          <SearchBar
            setCurrentMovieName={setCurrentMovieName}
            focusDiv={focusDiv}
          />
          <div
            className="container mx-auto mt-10 mb-4 w-7/12 md:w-9/12  bg-[#242424] rounded-xl"
            ref={focusDiv}
          >
            <SlickSlider />
          </div>
        </div>
      ) : null}

      <main className="md:px-4 py-4">
        <Outlet
          context={{
            focusDiv,
            currentMovieName,
            setCurrentMovieName,
          }}
        />
      </main>
    </div>
  );
}

export default Home;
