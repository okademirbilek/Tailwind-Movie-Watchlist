import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPersonDetail } from "../components/services/api";

const useFetchPersonDetail = (params) => {
  return useQuery({
    queryKey: ["person", params.personId],
    queryFn: () => fetchPersonDetail(params),
  });
};

export default useFetchPersonDetail;
