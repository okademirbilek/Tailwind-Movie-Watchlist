import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";

function SearchBar({ setCurrentMovieName, focusDiv }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const cakir = encodeURI(query);
    const queryForApi = cakir.split("%20").join("+");
    setCurrentMovieName(queryForApi);
    navigate(`/search/${queryForApi}/${1}`);
    focusDiv.current.scrollIntoView();
  };

  return (
    <section className="container mx-auto">
      <form
        className="flex flex-grow justify-center items-center mb-6 p-4 md:p-0 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-grow items-center justify-center  max-w-[600px] relative">
          <Icon
            icon={search}
            className="cursor-pointer flex items-center justify-center rounded-l-full py-2.5 px-4 border-none h-[44px] bg-white"
            size={25}
          />
          <input
            id="movie-name"
            type="text"
            placeholder="Search a movie"
            onChange={handleChange}
            value={query}
            required
            minLength={3}
            className="py-2 px-4 text-lg w-full outline-none border-none "
          ></input>
        </div>
        <button
          className="py-2.5 px-4 rounded-r-full border-none  bg-gray-300 disabled:cursor-wait flex flex-shrink-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
