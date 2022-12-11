import { Grid } from "@giphy/react-components";
import { Input } from "antd";
import { useState } from "react";
import { useFetchAPI } from "../hooks/use-fetch-api";
import "./Home.css";

const { Search } =  Input;
const trendsAPI = "https://api.giphy.com/v1/gifs/trending"
const searchAPI = "https://api.giphy.com/v1/gifs/search"
export const Home = () => {
  const { getData: getData, error: trendsError } = useFetchAPI();
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
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
        />
      </div>
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
    </>
  );
};
