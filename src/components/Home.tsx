import { Grid } from "@giphy/react-components";
import { useFetchAPI } from "../hooks/use-fetch-api";
import './Home.css'
export const Home = () => {
  const {
    getTrendingData: getTrendsData,
    error: trendsError,
  } = useFetchAPI({ url: "https://api.giphy.com/v1/gifs/trending" });

  const fetchGifs = (offset: number) => getTrendsData(offset)

  return (
    <div className="gifsContainer">
        <Grid
          width={800}
          columns={3}
          fetchGifs={fetchGifs}
        />
    </div>
  )
}