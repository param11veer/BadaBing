import React from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const Topnav = () => {
  const [query, setquery] = React.useState("");
  const [searches, setsearches] = React.useState([]);
  console.log(query);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    GetSearches();
  }, [query]); //This means changes tb tb ho jb query me changes ho

  return (
    <div className="w-full h-[8vh] relative flex items-center justify-center px-6 font-medium">
      <div className="relative max-w-2xl w-full flex items-center">
        <i className="absolute left-4 text-zinc-400 ri-search-2-line text-xl transition-colors duration-200 group-hover:text-zinc-300"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search movies, tv shows..."
          className="w-full bg-zinc-800/30 text-white text-lg pl-12 pr-4 py-3 rounded-xl border border-zinc-700/50 outline-none focus:border-[#9340FF]/50 focus:bg-zinc-800/50 transition-all duration-200 placeholder:text-zinc-500"
        />
        {query.length > 0 && (
          <button
            onClick={() => setquery("")}
            className="absolute right-4 text-zinc-400 hover:text-zinc-300 transition-colors duration-200"
          >
            <i className="ri-close-fill text-xl"></i>
          </button>
        )}
      </div>

      <div className="absolute w-[45%] max-h-[70vh] bg-[#1F1E24]/95 top-[100%] mt-1 rounded-2xl  border-zinc-700/50 backdrop-blur-sm overflow-auto shadow-xl shadow-black/20 z-10">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type === 'movie' ? 'movies' : s.media_type}/details/${s.id}`}
            key={i}
            className="flex items-center gap-4 p-4 hover:bg-zinc-800/50 transition-all duration-200"
          >
            <img
              src={
                s.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${s.backdrop_path}`
                  : s.poster_path
                  ? `https://image.tmdb.org/t/p/w500${s.poster_path}`
                  : s.profile_path
                  ? `https://image.tmdb.org/t/p/w500${s.profile_path}`
                  : "/no_iamge.avif"
              }
              alt={s.name || s.title || "Movie Poster"}
              className="w-12 h-16 object-cover rounded-lg bg-zinc-800"
            />
            <div className="flex flex-col">
              <span className="text-white text-lg">
                {s.name || s.title || s.original_name || s.original_title}
              </span>
              <span className="text-zinc-400 text-sm">
                {s.first_air_date ||
                  s.release_date ||
                  s.first_air_date ||
                  s.release_date}{" "}
                • {s.media_type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
