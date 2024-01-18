import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

export default function MovieDetails() {
  const [onToggle, setOnToggle] = useState(false);
  const params = useParams();

  const { addNewMovie } = useAuth();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", params.id],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}&append_to_response=videos,images?api_key=${apiKey}`,
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
  if (!isLoading) {
    console.log(data);
  }

  if (isError) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  function hanleClick() {
    setOnToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="movie-detail-container">
      {/* <>
        <MovieCart
          filmData={value}
          onClick={addNewMovie}
          btnId="add-btn"
          detailPage={false}
        />
        <div className="trailer" onClick={() => hanleClick()}>
          Watch Trailer
        </div>
        <div className="video-container ">
          <iframe
            src={`https://autoembed.to/movie/imdb/${params?.id}`}
            width="100%"
            height="100%"
            // frameborder="0"
            title=""
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {onToggle === true ? (
          <div className="trailer-container">
            <div onClick={() => setOnToggle(false)} className="close-container">
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close">close</label>
            </div>
            <iframe
              src={`https://autoembed.to/trailer/movie/${params?.id}`}
              width="100%"
              height="100%"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </> */}
    </div>
  );
}
