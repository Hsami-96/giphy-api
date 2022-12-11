import { useFetchAPI } from "../hooks/use-fetch-api";

export const Home = () => {
  const {
    data: trendsData,
    loading: trendsLoading,
    error: trendsError,
  } = useFetchAPI({ url: "https://api.giphy.com/v1/gifs/trending" });

  console.log(trendsData)
  return (
    <div>Home</div>
  )
}