import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col items-center   relative w-[175px] h-[275px] animate-pulse bg-gray-300  min-[420px]:w-[200px] min-[420px]:h-[300px] overflow-hidden group rounded-md">
      <div className="w-full h-full rounded-md max-w-none"></div>

      <div className="flex items-center justify-center w-full h-10 absolute bottom-0   bg-black bg-opacity-80">
        <h2 className="max-w-[200px] truncate px-4"></h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 right-1 rounded-md   bg-black bg-opacity-80">
        <h2 className=""></h2>
      </div>
      <div className="flex justify-center w-14 h-6 absolute top-1 left-1 rounded-md   bg-black bg-opacity-80">
        <h2 className=""></h2>
      </div>
    </div>
  );
};

export default Skeleton;
