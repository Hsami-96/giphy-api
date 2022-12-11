import { GifsResult } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
interface GiphyDisplayProps {
  searchText: string;
  fetchSearchedGifs: (offset: number) => Promise<GifsResult>;
  fetchTrendingGifs: (offset: number) => Promise<GifsResult>;
}
export const GiphyDisplay = ({
  searchText,
  fetchSearchedGifs,
  fetchTrendingGifs,
}: GiphyDisplayProps) => {
  return (
    <>
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
    </>
  );
};
