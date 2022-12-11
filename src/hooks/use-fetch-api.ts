import axios from "axios";
import React, { useEffect, useState } from "react";
import { IGif } from '@giphy/js-types';
import { GifProperties } from "../models/GifProperties";
import { mapToGifData } from "../utils/MapToGifData";

interface useFetchAPIProps {
  url: string;
}
const apiKey: string = process.env.REACT_APP_GIPHY_KEY ?? ''

export const useFetchAPI = ({ url }: useFetchAPIProps) => {
  const [data, setData] = useState<GifProperties[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      const getData = async () => {
        await axios(url, {
          params: {
            api_key: apiKey,
          }
        })
        .then((response) => {
          if(response.data.data) {
            let gifProperties: GifProperties[] = []
            response.data.data.map((gif: IGif) => {
                const mapToGifProperty = mapToGifData(gif)
                gifProperties.push(mapToGifProperty)
            })

            setData(gifProperties);          
          }
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
      }
      getData()
    }
  }, [url]);

  return {
    data,
    loading,
    error
  }
};
