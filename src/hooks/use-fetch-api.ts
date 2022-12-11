import { GifsResult } from "@giphy/js-fetch-api";
import axios from "axios";
import { useState } from "react";

const apiKey: string = process.env.REACT_APP_GIPHY_KEY ?? ''

export const useFetchAPI = () => {
  const [error, setError] = useState(null);

      const getData = async (url: string, offset: number, searchText?: string): Promise<GifsResult> => {
        console.log('getting data')
        return axios(url, {
            params: {
                api_key: apiKey,
                offset: offset,
                limit: 10,
                q: searchText
            }
        }).then((data) => {
            return data.data 
        }).catch((error) => {
            setError(error);
        })
      }

  return {
    getData,
    error
  }
};
