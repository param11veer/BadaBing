import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data = [] }) => {
  console.log("HorizontalCards received data:", data);

  if (!data || data.length === 0) {
    return (
      <div className="px-6">
        <div className="w-full flex items-center justify-center py-8">
          <p className="text-zinc-400">No recommendations available</p>
        </div>
      </div>
    );
  }

  // Take only the first 10 items
  const displayData = data.slice(0, 10);

  return (
    <div className="px-6">
      <div className="w-full flex overflow-x-auto gap-6 pb-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {displayData.map((d, i) => {
          const mediaType = d.media_type || (d.first_air_date ? 'tv' : 'movie');
          const title = d.title || d.name || d.original_title || d.original_name;
          const releaseDate = d.release_date || d.first_air_date;
          const runtime = d.runtime || '120'; // Default runtime if not available

          return (
            <Link
              key={i}
              to={`/${mediaType === 'movie' ? 'movies' : mediaType}/details/${d.id}`}
              className="min-w-[280px] h-[420px] bg-zinc-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,64,255,0.3)] group flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-[55%] overflow-hidden relative">
                <img
                  src={
                    d.poster_path
                      ? `https://image.tmdb.org/t/p/w500${d.poster_path}`
                      : '/no-image.avif'
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/no-image.avif';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h1 className="text-white font-semibold text-lg mb-2 group-hover:text-[#9340FF] transition-colors duration-200 line-clamp-1">
                    {title}
                  </h1>
                  <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                    {d.overview}
                  </p>

                  {/* Info Tags */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#9340FF]/20 text-[#9340FF] rounded-full text-xs font-medium">
                      {releaseDate?.split("-")[0]}
                    </span>
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium">
                      {d.vote_average?.toFixed(1)} ⭐
                    </span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <i className="ri-time-line"></i>
                    <span>{Math.floor(runtime / 60)}h {runtime % 60}m</span>
                  </div>
                  <button className="px-3 py-1.5 bg-[#9340FF] text-white rounded-lg text-sm font-medium hover:bg-[#9340FF]/90 transition-colors duration-200 flex items-center gap-1">
                    <i className="ri-play-fill"></i> Watch
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCards;
