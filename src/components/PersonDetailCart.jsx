import React, { useMemo } from "react";
import BackButton from "./ui/BackButton";
import PopularMovieCart from "./PopularMovieCart";

const PersonDetailCart = ({ data }) => {
  const sortedMovies = useMemo(() => {
    return data.movie_credits?.cast?.sort((a, b) => {
      return b.release_date.slice(0, 4) - a.release_date.slice(0, 4);
    });
  }, [data]);

  return (
    <div className="container mx-auto flex flex-col rounded-xl  bg-slate-800  pb-5 ">
      <div className=" ml-3 md:ml-12 mt-6 bg-[#141212] hover:bg-white  hover:text-black w-fit px-4 py-1 rounded-md">
        <BackButton />
      </div>
      <div className="flex flex-col gap-5  py-4  px-3 md:px-4 md:flex-row   md:mt-2 md:mx-8">
        <img
          className="flex flex-shrink-0 relative w-[233.3px] h-[350px] rounded-sm  "
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={` ${data.name} poster`}
        />
        <div className="flex flex-col ">
          <h1 className="text-3xl">
            {data.name}({data.known_for_department})
          </h1>
          <h2 className="">
            Birthday : {data.birthday} {data.place_of_birth}
          </h2>

          <h3>popularity : {data.popularity} </h3>
          <div>
            <h3 className="text-2xl mt-2">Biography</h3>
            <p className="text-md text-gray-300">
              Place of birth : {data.biography}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  px-2 mb-6">
        <h2 className="text-2xl my-2">Movies</h2>
        <div className=" flex gap-3 items-center justify-start overflow-x-scroll ">
          {sortedMovies.map((item, index) => {
            if (index < 11) {
              return (
                <div key={item.id} className="mb-3">
                  <PopularMovieCart data={item} />
                  <h3 className="truncate max-w-[175px] mt-1 mb-2">
                    {item?.character || "No Character Name"}
                  </h3>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonDetailCart;
