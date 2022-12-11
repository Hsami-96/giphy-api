import { Input } from "antd";
import React from "react";
const { Search } = Input;

interface GiphySearchBarProps {
  onSearch: (searchText: string) => void;
}
export const GiphySearchBar = ({ onSearch }: GiphySearchBarProps) => {
  return (
    <Search
      className="searchInput"
      placeholder="Search for a GIF"
      allowClear
      enterButton="Search"
      size="middle"
      onSearch={onSearch}
    />
  );
};
