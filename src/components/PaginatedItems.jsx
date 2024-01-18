import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import MovieCart from "./MovieCart.jsx";

import { useQuery } from "@tanstack/react-query";

import { useOutletContext } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import useEffectOnUpdate from "../hooks/useEffectOnUpdate";

import { useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

import { useNavigate } from "react-router-dom";

function PaginatedItems() {
  const { addNewMovie } = useAuth();
  const { currentMovieName, setCurrentMovieName, focusDiv } =
    useOutletContext();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(params?.page));

  const navigate = useNavigate();

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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", currentPage, params?.movie],
    keepPreviousData: true,
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${
          params?.movie || currentMovieName
        }&language=en-US&page=${params?.page || currentPage}&api_key=${apiKey}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjYwMDJjZDBjODBhMzliYjE0N2JjNDhlMGI0Njg4NSIsInN1YiI6IjY0Mzk0YWQ5MWQ1Mzg2MDBmNDBmZDg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._G-3ZRhcRj7sNgeUdOJgszgcbSqXcTuyDBqaMUOKYr8`,
            accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  // if (!isLoading) {
  //   console.log(data);
  // }

  if (isError) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    navigate(`/search/${params.movie}/${event.selected + 1}`);
    focusDiv.current.scrollIntoView();
  };

  return (
    <>
      <h2 className="results">Searched Movie Results</h2>
      {data.results.map((filmData) => {
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
    </>
  );
}

export default PaginatedItems;
