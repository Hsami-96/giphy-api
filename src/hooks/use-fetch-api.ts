import { GifsResult } from "@giphy/js-fetch-api";
import axios from "axios";
import { useState } from "react";

const apiKey: string = process.env.REACT_APP_GIPHY_KEY ?? "";

export const useFetchAPI = () => {
  const [error, setError] = useState(null);

  // I can also use state here that would be updated using spread operator by spreading new data into depending on the offset
  const getData = async (
    url: string,
    offset: number,
    searchText?: string
  ): Promise<GifsResult> => {
    return axios(url, {
      params: {
        api_key: apiKey,
        offset: offset,
        limit: 15,
        q: searchText,
      },
    })
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    getData,
    error,
  };
};
