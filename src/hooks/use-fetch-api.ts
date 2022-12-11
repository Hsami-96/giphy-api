import { GifsResult } from "@giphy/js-fetch-api";
import axios from "axios";
import { useState } from "react";

interface useFetchAPIProps {
  url: string,
}
const apiKey: string = process.env.REACT_APP_GIPHY_KEY ?? ''

export const useFetchAPI = ({ url }: useFetchAPIProps) => {
  const [error, setError] = useState(null);

      const getTrendingData = async (offset: number): Promise<GifsResult> => {
        return axios(url, {
            params: {
                api_key: apiKey,
                offset: offset,
                limit: 10
            }
        }).then((data) => {
            return data.data 
        }).catch((error) => {
            setError(error);
        })
      }

  return {
    getTrendingData,
    error
  }
};
