import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./temple/Cards";
import Dropdown from "./temple/Dropdown";
import Topnav from "./temple/Topnav";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [newly, setNewly] = useState("day");
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const GetTrending = async () => {
    try {
      if (isLoadingMore) return;
      setIsLoadingMore(true);
      
      const { data } = await axios.get(`/trending/${category}/${newly}?page=${page}`);
      console.log("API Response:", data);
      
      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      // Check if we've reached the total pages
      if (page >= data.total_pages) {
        setHasMore(false);
      }

      setTrending(prev => [...prev, ...data.results]);
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
    // Reset state when category or newly changes
    setTrending([]);
    setPage(1);
    setHasMore(true);
    setLoading(true);
    GetTrending();
  }, [category, newly]);

  if (loading && trending.length === 0) return <Loading />;

  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex flex-col">
      <div className="w-full h-[8vh] flex items-center justify-between px-8 pt-2">
        <div className="flex items-center gap-4">
          <h1 className="text-zinc-400 text-2xl font-semibold flex items-center gap-2">
            <i
              onClick={() => navigate("/")}
              className="hover:text-[#9340FF] ri-arrow-left-line cursor-pointer"
            ></i>
            Trending
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Topnav />
          <Dropdown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Time"
            options={["day", "week"]}
            func={(e) => setNewly(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-4">
        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center py-4">
              <div className="w-8 h-8 border-4 border-[#9340FF] border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
          endMessage={
            trending.length > 0 && (
              <p className="text-center text-zinc-400 py-4">
                <b>Yay! You have seen it all</b>
              </p>
            )
          }
          scrollThreshold="80%"
          height="calc(100vh - 8vh)"
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Trending;
