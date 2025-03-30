import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({data, type = 'default', title}) => {
  // Log the first item to check data structure

  console.log(title);

  // Enhanced sorting logic for people
  const sortedData = [...data].sort((a, b) => {
    if (type === 'people') {
      // Only check for profile images for people
      if (a.profile_path && !b.profile_path) return -1;
      if (!a.profile_path && b.profile_path) return 1;
      
      // If both have or don't have profile images, sort by popularity
      return (b.popularity || 0) - (a.popularity || 0);
    }
    return 0;
  });

  const getMediaType = (item) => {
    if (type === 'people') return item.known_for_department || 'Actor';
    if (item.media_type) return item.media_type.toUpperCase();
    if (item.first_air_date) return 'TV Show';
    if (item.release_date) return 'Movie';
    return 'Unknown';
  };

  const getReleaseDate = (item) => {
    if (type === 'people') return '';
    const date = item.release_date || item.first_air_date;
    return date ? date.split('-')[0] : '';
  };

  const getRating = (item) => {
    if (type === 'people') return item.popularity?.toFixed(1) || '0.0';
    return item.vote_average?.toFixed(1) || '0.0';
  };

  const getRuntime = (item) => {
    // For TV Shows
    if (item.number_of_episodes) {
      return `${item.number_of_episodes} Episodes`;
    }
    
    // For Movies
    if (item.runtime) {
      const hours = Math.floor(item.runtime / 60);
      const minutes = item.runtime % 60;
      return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    // For items with episode_run_time array
    if (item.episode_run_time && item.episode_run_time.length > 0) {
      const runtime = item.episode_run_time[0];
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;
      return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    // Default case
    return type === 'tv' ? 'Episodes N/A' : 'Runtime N/A';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {sortedData.map((c, i) => (
        <Link 
          key={i} 
          to={`/${(c.media_type === 'movie' ? 'movies' : c.media_type) || title}/details/${c.id}`}
          className={`bg-zinc-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(147,64,255,0.3)]`}
        >
          {/* Image Container */}
          <div className={`relative overflow-hidden ${
            type === 'people' ? 'h-[400px]' : 'h-[300px]'
          }`}>
            <img
              src={
                type === 'people'
                  ? c.profile_path
                    ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                    : '/no_iamge.avif'
                  : c.backdrop_path || c.poster_path
                    ? `https://image.tmdb.org/t/p/original${c.backdrop_path || c.poster_path}`
                    : '/no_iamge.avif'
              }
              alt={c.name || c.title || c.original_name || c.original_title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/no_iamge.avif';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h1 className="text-white font-semibold text-lg mb-2 group-hover:text-[#9340FF] transition-colors duration-200 line-clamp-1">
              {c.name || c.title || c.original_name || c.original_title}
            </h1>
            <p className="text-zinc-400 text-sm line-clamp-2 mb-3">
              {type === 'people' 
                ? (c.biography || 'Known for ' + (c.known_for?.[0]?.title || c.known_for?.[0]?.name || 'various roles'))
                : (c.overview || 'No overview available')}
            </p>
            
            {/* Info Tags */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-[#9340FF]/20 text-[#9340FF] rounded-full text-xs font-medium">
                {getMediaType(c)}
              </span>
              {getReleaseDate(c) && (
                <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium">
                  {getReleaseDate(c)}
                </span>
              )}
              <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium">
                {getRating(c)} ⭐
              </span>
            </div>

            {/* Bottom Section */}
            {type === 'people' ? (
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <i className="ri-film-line"></i>
                <span>
                  {c.known_for?.length 
                    ? `${c.known_for.length} notable ${c.known_for.length === 1 ? 'work' : 'works'}`
                    : 'No works listed'}
                </span>
              </div>
            ) : (
              <div className="flex justify-end">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="px-3 py-1 bg-[#9340FF] text-white rounded-lg text-sm font-medium hover:bg-[#9340FF]/90 transition-colors duration-200 flex items-center gap-1"
                >
                  <i className="ri-play-fill"></i> Watch
                </button>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
