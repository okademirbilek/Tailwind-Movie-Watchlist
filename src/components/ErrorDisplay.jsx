import React from "react";

const ErrorDisplay = (error) => {
  return <p className="container mx-auto">{JSON.stringify(error)}</p>;
};

export default ErrorDisplay;
