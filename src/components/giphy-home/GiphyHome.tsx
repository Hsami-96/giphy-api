import { Alert } from "antd";
import { useState } from "react";
import { useFetchAPI } from "../../hooks/use-fetch-api";
import { GiphyDisplay } from "../giphy-display-gif/GiphyDisplay";
import { GiphySearchBar } from "../giphy-search-bar/GiphySearchBar";
import "./GiphyHome.css";

const trendsAPI = "https://api.giphy.com/v1/gifs/trending"
const searchAPI = "https://api.giphy.com/v1/gifs/search"
export const GiphyHome = () => {
  const { getData: getData, error } = useFetchAPI();
  const [searchText, setSearchText] = useState('')

  const fetchTrendingGifs = (offset: number) => getData(trendsAPI,offset);
  const fetchSearchedGifs = (offset: number) => getData(searchAPI,offset, searchText);

  const onSearch = (value: string) => {
   setSearchText(value)
  }

  return (
    <>
      <div className="searchContainer">
        <GiphySearchBar onSearch={onSearch}/>
      </div>
      {error ? (
        <Alert message=" Unable to get Gifs :( , please try again!" type="error" />
      ): (
        <div className="gifsContainer">
          <GiphyDisplay fetchSearchedGifs={fetchSearchedGifs} fetchTrendingGifs={fetchTrendingGifs} searchText={searchText}/>
      </div>

      )}
    </>
  );
};
