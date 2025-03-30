import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./temple/Cards";
import Dropdown from "./temple/Dropdown";
import Topnav from "./temple/Topnav";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const GetMovies = async () => {
    try {
      if (isLoadingMore) return;
      setIsLoadingMore(true);
      
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      console.log("API Response:", data);
      
      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      // Check if we've reached the total pages
      if (page >= data.total_pages) {
        setHasMore(false);
      }

      setMovies(prev => [...prev, ...data.results]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.log(error);
      setHasMore(false);
    } finally {
      setIsLoadingMore(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset state when category changes
    setMovies([]);
    setPage(1);
    setHasMore(true);
    setLoading(true);
    GetMovies();
  }, [category]);

  if (loading && movies.length === 0) return <Loading />;

  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex flex-col">
      <div className="w-full h-[8vh] flex items-center justify-between px-8 pt-2">
        <div className="flex items-center gap-4">
          <h1 className="text-zinc-400 text-2xl font-semibold flex items-center gap-2">
            <i
              onClick={() => navigate("/")}
              className="hover:text-[#9340FF] ri-arrow-left-line cursor-pointer"
            ></i>
            Movies
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Topnav />
          <Dropdown
            title="Category"
            options={[
              "now_playing",
              "popular",
              "top_rated",
              "upcoming",
              "latest"
            ]}
            func={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-4">
        <InfiniteScroll
          dataLength={movies.length}
          next={GetMovies}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center py-4">
              <div className="w-8 h-8 border-4 border-[#9340FF] border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
          endMessage={
            movies.length > 0 && (
              <p className="text-center text-zinc-400 py-4">
                <b>Yay! You have seen it all</b>
              </p>
            )
          }
          scrollThreshold="80%"
          height="calc(100vh - 8vh)"
        >
          <Cards data={movies} title="movies" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Movies;
