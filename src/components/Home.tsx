import { Grid } from "@giphy/react-components";
import { Alert, Input } from "antd";
import { useState } from "react";
import { useFetchAPI } from "../hooks/use-fetch-api";
import "./Home.css";

const { Search } =  Input;
const trendsAPI = "https://api.giphy.com/v1/gifs/trending"
const searchAPI = "https://api.giphy.com/v1/gifs/search"
export const Home = () => {
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
      <Search
          className="searchInput"
          placeholder="Search for a GIF"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
        />
      </div>
      {error ? (
        <Alert message=" Unable to get Gifs :( , please try again!" type="error" />
      ): (
        <div className="gifsContainer">
        {searchText && (
        <Grid
          className="gifs"
          width={800}
          columns={3}
          fetchGifs={fetchSearchedGifs}
        />
      )}
      {!searchText && (
        <Grid className="gifs" width={800} columns={3} fetchGifs={fetchTrendingGifs} />
      )}
      </div>

      )}
    </>
  );
};
