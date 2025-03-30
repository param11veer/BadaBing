import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div className="w-full h-[50vh] relative">
      {/* Backdrop Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path || data.profile_path || data.logo_path || data.still_path || data.background_path}`} 
          alt={data.title || data.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1E24] via-[#1F1E24]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {data.title || data.name}
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl mb-6 line-clamp-3">
            {data.overview}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#9340FF] text-white rounded-full text-sm font-medium">
              {data.release_date?.split('-')[0] || data.first_air_date?.split('-')[0]}
            </span>
            <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm font-medium backdrop-blur-sm">
              {data.vote_average?.toFixed(1)} ⭐
            </span>
          </div>
          <div className="flex gap-4">
            <Link 
              to={`/${(data.media_type === 'movie' ? 'movies' : data.media_type) || title}/watch/${data.id}`}
              className="px-6 py-3 bg-[#9340FF] text-white rounded-lg font-medium hover:bg-[#9340FF]/90 transition-colors duration-200 flex items-center gap-2"
            >
              <i className="ri-play-fill"></i> Watch Now
            </Link>
            <Link to={`/${(data.media_type === 'movie' ? 'movies' : data.media_type) || title}/details/${data.id}`} className="px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-800/70 transition-colors duration-200 backdrop-blur-sm flex items-center gap-2">
              <i className="ri-information-line"></i> More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
