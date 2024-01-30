import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { home } from "react-icons-kit/fa/home";
import { star } from "react-icons-kit/fa/star";
import { calendar } from "react-icons-kit/fa/calendar";
import { Icon } from "react-icons-kit";
import { dollar } from "react-icons-kit/fa/dollar";
import { clockO } from "react-icons-kit/fa/clockO";

import { chevronLeft } from "react-icons-kit/fa/chevronLeft";

import { Link } from "react-router-dom";

import PopularMovieCart from "../components/PopularMovieCart";
import WatchTrailer from "./WatchTrailer";
import useToggle from "../hooks/useToggle";

const MovieDetailCart = ({ onClick, btnId, data }) => {
  const [isShown, setIsShown] = useToggle(false);

  const { movieData } = useAuth();
  //check if the movie already in watchlist
  const isExist =
    btnId === "add-btn" &&
    movieData.some((filmList) => filmList.id === data.id);

  console.log(data);

  //to use this component in 2 places we control the firebase id to
  //delete correct data when we use this component in watchlist

  const detail = btnId === "add-btn" ? data : data.firebaseId;
  return (
    <div className="container mx-auto flex flex-col rounded-xl  bg-slate-800  pb-5 ">
      <div className=" ml-3 md:ml-12 mt-6 bg-[#141212] hover:bg-white  hover:text-black w-fit px-4 py-1 rounded-md">
        <Link className="flex gap-3" to={"/"}>
          <Icon icon={chevronLeft} size={16} />
          <h2>Back</h2>
        </Link>
      </div>
      <div className="flex flex-col  py-4  px-3 md:px-4 md:flex-row gap-6  md:mt-2 md:mx-8">
        <div className="flex flex-col">
          <div className="flex flex-shrink-0 relative w-[233.3px] h-[350px] ">
            {data.poster_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                className="w-full h-full rounded-sm max-w-none"
                alt={`${data.Title} Poster`}
              />
            ) : (
              <img
                className="w-full h-full rounded-sm max-w-none"
                src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
              />
            )}
            <div className="badge px-1 py-0 absolute bottom-1 right-1 bg-green-500 bg-opacity-80">
              <p>{data.status}</p>
            </div>
            <div className="badge py-0 absolute bottom-1 left-1 bg-red-500 bg-opacity-80">
              <p>{data.original_language.toUpperCase()}</p>
            </div>

            <button
              onClick={() => onClick(detail)}
              disabled={isExist}
              className={` absolute top-2 left-2 w-8 h-8 rounded-full disabled:bg-slate-600 disabled:cursor-default  ${
                btnId === "add-btn"
                  ? "add-btn bg-add-btn"
                  : "remove-btn bg-remove-btn"
              }`}
            ></button>
          </div>
          <div className=" flex justify-center cursor-pointer font-bold mb-6 bg-[#141212] hover:bg-white hover:text-black transition  w-[233.3px] mt-2  py-2 rounded-md">
            <button onClick={() => setIsShown(true)}>Watch Trailer</button>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex gap-4">
            <h2 className="max-w-[275px] md:max-w-none text-3xl">
              {data.original_title}
            </h2>
            <Link to={data.homepage} target="__blank">
              <div className="flex items-center justify-center cursor-pointer bg-[#321C76] hover:bg-white hover:text-[#321C76] rounded-full  w-[40px] h-[40px]">
                <Icon icon={home} size={25} />
              </div>
            </Link>
          </div>
          <p>{data.overview}</p>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-colorD">
              <Icon icon={star} size={18} className="mb-1" />
              <p>IMDB : {data.vote_average}</p>
            </div>

            <p className="badge badge-colorD">IMDB_ID : {data.imdb_id}</p>

            <p className="badge badge-colorD">
              Vote count : {data.vote_count}{" "}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-colorD">
              <Icon icon={calendar} size={18} className="mb-1" />
              <p className="hidden md:block">Release Date : </p>
              <p>{data.release_date}</p>
            </div>
            <div className="badge badge-colorD">
              <Icon icon={clockO} size={22} className="mb-1" />
              <p className="hidden md:block"> Duration : </p>
              <p>{data.runtime} min</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-colorD">
              <p>Budget : {data.budget}</p>
              <Icon icon={dollar} size={18} className="mb-1" />
            </div>
            <div className="badge badge-colorD">
              <p>Revenue : {data.revenue}</p>
              <Icon icon={dollar} size={18} className="mb-1" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.genres.map((item) => {
              return (
                <div key={item.id} className="badge badge-colorP">
                  {item.name}
                </div>
              );
            })}
          </div>
          <h2 className="text-xl">Production companies</h2>
          <div className="flex gap-1 items-center justify-start  overflow-x-auto ">
            {data.production_companies.map((item) => {
              return (
                <div key={item.id} className="badge bg-[#141212] mb-2">
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col  px-12 mb-6">
        <h2 className="text-2xl my-2">Keywords</h2>
        <div className=" flex  flex-wrap gap-3   items-center justify-start  ">
          {data.keywords?.keywords?.map((item) => {
            return (
              <div className="badge badge-colorB" key={item.id}>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col  px-12 mb-6">
        <h2 className="text-2xl my-2">Cast</h2>
        <div className=" flex gap-3 items-center justify-start overflow-x-scroll ">
          {data.credits?.cast?.map((item, index) => {
            if (index < 11) {
              return (
                <div key={item.id}>
                  <img
                    className="w-[175px] h-[262px] max-w-none object-cover rounded-sm"
                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    alt=""
                  />
                  <h3 className="truncate my-1 font-bold">
                    {item.original_name}
                  </h3>
                  <h3 className="truncate max-w-[175px] mt-1 mb-2">
                    {item.character}
                  </h3>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="flex flex-col  px-12 mb-6">
        <h2 className="text-2xl my-2">Similar Movies</h2>
        <div className=" flex gap-3 items-center justify-start overflow-x-scroll ">
          {data.similar?.results?.map((item, index) => {
            if (index < 11) {
              return (
                <div key={item.id} className="mb-3">
                  <PopularMovieCart data={item} />
                </div>
              );
            }
          })}
        </div>
      </div>

      {isShown && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-screen  bg-black bg-opacity-70">
          <div className="flex items-center justify-center w-[60%] h-[40%]">
            <WatchTrailer setIsShown={setIsShown} data={data.videos?.results} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailCart;
