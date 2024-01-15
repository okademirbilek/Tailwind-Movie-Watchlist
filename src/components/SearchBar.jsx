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
    <section>
      <form
        className="flex flex-grow justify-center mb-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-grow items-center max-w-[600px] relative">
          <Icon
            icon={search}
            className="cursor-pointer flex items-center justify-center rounded-l-full py-2 px-4 border-gray-100 border border-r-0  bg-white"
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
            className="py-2 px-4 text-lg w-full focus:border-blue-500 outline-none"
          ></input>
        </div>
        <button
          className="py-2 px-4 rounded-r-full border-gray-100 border border-l-0 bg-gray-300 disabled:cursor-wait"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
