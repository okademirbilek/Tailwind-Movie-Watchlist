import React from "react";

const WatchTrailer = ({ data, setIsShown }) => {
  const filterData = data.filter((item) => {
    return item.name.includes("Trailer");
  });

  return (
    <div>
      WatchTrailer
      <button className="bg-red-500" onClick={() => setIsShown(false)}>
        Close
      </button>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${filterData[0].key}`}
        title={filterData[0].name}
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchTrailer;
