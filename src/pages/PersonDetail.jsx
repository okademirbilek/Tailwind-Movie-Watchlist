import React from "react";
import { useParams } from "react-router-dom";

import useFetchPersonDetail from "../hooks/useFetchPersonDetail";

import ErrorDisplay from "../components/ErrorDisplay";
import LoadingDisplay from "../components/LoadingDisplay";

import PersonDetailCart from "../components/PersonDetailCart";

const PersonDetail = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useFetchPersonDetail(params);

  if (data) {
    console.log(data);
  }

  return (
    <div className=" container mx-auto">
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      {data && <PersonDetailCart data={data} />}
    </div>
  );
};

export default PersonDetail;
