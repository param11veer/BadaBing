import React, { useState } from "react";
import Dropdown from "../components/temple/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Header from "./temple/Header";
import HorizontalCards from "./temple/HorizontalCards";
import Sidenav from "./temple/Sidenav";
import Topnav from "./temple/Topnav";
function Home() {
  document.title = "Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trendingcards, settrendingcards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error fetching wallpaper:", error);
    }
  };

  const GetTrendingcards = async () => {
    try {
      const apiCategory = category === 'movies' ? 'movie' : category;
      const { data } = await axios.get(`/trending/${apiCategory}/day`);
      
      // Add media_type to each item if it's not present
      const processedResults = data.results.map(item => ({
        ...item,
        media_type: item.media_type || category
      }));
      
      settrendingcards(processedResults);
    } catch (error) {
      console.log("Error fetching trending cards:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    GetTrendingcards();
    GetWallpaper();
  }, [category]);

  if (loading || !wallpaper || !trendingcards) return <Loading/>;

  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        {wallpaper && <Header data={wallpaper} title={wallpaper.media_type} />}
        <div className="py-5 px-5 mt-5">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
            <Dropdown
              title="Filter"
              options={["movies", "tv", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        {trendingcards && <HorizontalCards data={trendingcards} title={category} />}
      </div>
    </>
  );
}

export default Home;
