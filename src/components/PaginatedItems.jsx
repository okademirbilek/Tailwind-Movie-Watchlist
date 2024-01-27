import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import MovieCart from "./MovieCart.jsx";

import { useOutletContext } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import useEffectOnUpdate from "../hooks/useEffectOnUpdate";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import useFetchSearchMovie from "../hooks/useFetchSearchMovie.jsx";

import LoadingDisplay from "../components/LoadingDisplay.jsx";
import ErrorDisplay from "../components/ErrorDisplay.jsx";

function PaginatedItems() {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(params?.page));
  const { addNewMovie } = useAuth();
  const { currentMovieName, setCurrentMovieName, focusDiv } =
    useOutletContext();

  const navigate = useNavigate();

  //check whether someone types movie or page in directly url
  useEffectOnUpdate(() => {
    if (isNaN(parseInt(params.page))) {
      navigate(`/`);
      setCurrentPage(1);
    } else {
      console.log();
      setCurrentPage(parseInt(params.page));
    }
  }, [params.page]);

  useEffect(() => {
    setCurrentMovieName(params.movie);
  }, [params.movie]);

  //get the movie data
  const { data, isLoading, isError, error } = useFetchSearchMovie(
    params,
    currentMovieName,
    currentPage
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    navigate(`/search/${params.movie}/${event.selected + 1}`);
    focusDiv.current.scrollIntoView();
  };

  return (
    <>
      <h2 className="text-center text-2xl pt-8">Searched Movie Results</h2>
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      <div className="grid items-center justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data &&
          data.results.map((filmData) => {
            return (
              <MovieCart
                key={filmData.id}
                filmData={filmData}
                onClick={addNewMovie}
                btnId="add-btn"
                wantSpace={true}
              />
            );
          })}
      </div>

      {data ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={data.total_pages}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
          forcePage={currentPage - 1}
        />
      ) : null}
    </>
  );
}

export default PaginatedItems;
