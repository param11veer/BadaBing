import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv } from "../store/actions/tvActions";
import { removetv } from "../store/reducers/tvSlice";
import Loading from "./Loading";
import HorizontalCards from "./temple/HorizontalCards";

const TVDetails = () => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  console.log("TV Details:", info);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div className="relative w-screen h-screen bg-[#1F1E24] overflow-x-hidden">
      {/* Backdrop Image */}
      <div className="absolute top-0 left-0 w-full h-[80vh]">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`}
          alt={info.detail.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1E24]/10 via-[#1F1E24]/60 to-[#1F1E24]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-zinc-900/40 backdrop-blur-lg border-b border-zinc-800/30">
          {/* Left Section - Back Button */}
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group"
            >
              <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform duration-300"></i>
              <span className="text-sm font-medium tracking-wide">Back</span>
            </button>
          </div>

          {/* Right Section - External Links */}
          <div className="flex items-center gap-6">
            {info.detail.homepage && (
              <a
                href={info.detail.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-[#9340FF] hover:bg-zinc-800/50 transition-all duration-300 group"
              >
                <i className="ri-external-link-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-sm font-medium tracking-wide">Website</span>
              </a>
            )}
            <a
              href={`https://en.wikipedia.org/wiki/${
                info.detail.name ||
                info.detail.original_name
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-[#9340FF] hover:bg-zinc-800/50 transition-all duration-300 group"
            >
              <i className="ri-earth-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
              <span className="text-sm font-medium tracking-wide">Wiki</span>
            </a>
            {info.externalid.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-[#9340FF] hover:bg-zinc-800/50 transition-all duration-300 group"
              >
                <FaImdb className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium tracking-wide">IMDb</span>
              </a>
            )}
          </div>
        </nav>

        {/* TV Show Details */}
        <div className="px-8 mt-[25vh] flex gap-8">
          {/* Left Column - Poster and Watch Providers */}
          <div className="flex flex-col gap-6">
            <img
              className="w-[300px] rounded-xl shadow-[0_8px_30px_rgb(147,64,255,0.3)] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path || info.detail.backdrop_path
              }`}
              alt={info.detail.name}
            />

            {/* Watch Providers */}
            {(info.watchproviders?.flatrate?.length > 0 || info.watchproviders?.rent?.length > 0) && (
              <div className="bg-zinc-900/50 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="text-zinc-400 text-sm mb-3">Available on</h3>
                <div className="flex flex-wrap gap-3">
                  {info.watchproviders?.flatrate?.map((provider) => (
                    <div key={provider.provider_id} className="group relative">
                      <img
                        className="w-10 h-10 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                        src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                        alt={provider.provider_name}
                        title={`Watch on ${provider.provider_name}`}
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {provider.provider_name}
                      </div>
                    </div>
                  ))}
                  {info.watchproviders?.rent?.map((provider) => (
                    <div key={provider.provider_id} className="group relative">
                      <img
                        className="w-10 h-10 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                        src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                        alt={provider.provider_name}
                        title={`Rent on ${provider.provider_name}`}
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Rent on {provider.provider_name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - TV Show Information */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {info.detail.name}
              <span className="text-zinc-400 ml-2">
                ({info.detail.first_air_date?.split("-")[0]})
              </span>
            </h1>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
              <span className="px-2 py-1 bg-[#9340FF] text-white rounded-md">
                {info.detail.adult ? "18+" : "13+"}
              </span>
              <span>{info.detail.first_air_date}</span>
              <span>•</span>
              <span>{info.detail.episode_run_time?.[0]} min</span>
              <span>•</span>
              <span>{info.detail.original_language.toUpperCase()}</span>
            </div>

            {/* Genres */}
            <div className="flex gap-2 mb-6">
              {info.detail.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Rating and Votes */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#9340FF] text-2xl font-bold">
                  {info.detail.vote_average?.toFixed(1)}
                </span>
                <div className="text-zinc-400 text-sm">
                  <div>Rating</div>
                  <div>{info.detail.vote_count} votes</div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-zinc-300 leading-relaxed">
                {info.detail.overview}
              </p>
            </div>

            {/* Seasons */}
            {info.detail.seasons && info.detail.seasons.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Seasons</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {info.detail.seasons.map((season) => (
                    <div
                      key={season.id}
                      className="group relative bg-zinc-900/50 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-zinc-900/60 transition-all duration-300"
                    >
                      <div className="aspect-[2/3] relative">
                        <img
                          src={
                            season.poster_path
                              ? `https://image.tmdb.org/t/p/original/${season.poster_path}`
                              : "https://via.placeholder.com/500x750?text=No+Image"
                          }
                          alt={season.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-2">
                        <h3 className="text-xs font-medium text-white mb-1 truncate">
                          {season.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                          <span>{season.episode_count} Ep</span>
                          {season.air_date && (
                            <>
                              <span>•</span>
                              <span>{season.air_date.split("-")[0]}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Translation */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Translation</h2>
              <div className="bg-zinc-900/50 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <i className="ri-translate-2 text-[#9340FF]"></i>
                    <span className="text-zinc-400 text-sm">Available Languages</span>
                  </div>
                  {info.translations?.translations?.length > 10 && (
                    <button
                      onClick={() => setShowAllLanguages(!showAllLanguages)}
                      className="text-[#9340FF] text-sm hover:text-[#9340FF]/80 transition-colors duration-300 flex items-center gap-1"
                    >
                      {showAllLanguages ? (
                        <>
                          <span>Show Less</span>
                          <i className="ri-arrow-up-s-line"></i>
                        </>
                      ) : (
                        <>
                          <span>Show More</span>
                          <i className="ri-arrow-down-s-line"></i>
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(showAllLanguages 
                    ? info.translations?.translations 
                    : info.translations?.translations?.slice(0, 10)
                  )?.map((translation) => (
                    <div
                      key={translation.iso_639_1}
                      className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800/80 transition-colors duration-300 cursor-pointer group"
                    >
                      <span className="font-medium">{translation.english_name}</span>
                      <span className="text-zinc-500 ml-1">({translation.iso_639_1})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-zinc-400 font-medium mb-2">Status</h3>
                <p className="text-white">{info.detail.status}</p>
              </div>
              <div>
                <h3 className="text-zinc-400 font-medium mb-2">Seasons</h3>
                <p className="text-white">{info.detail.number_of_seasons}</p>
              </div>
              <div>
                <h3 className="text-zinc-400 font-medium mb-2">Episodes</h3>
                <p className="text-white">{info.detail.number_of_episodes}</p>
              </div>
              <div>
                <h3 className="text-zinc-400 font-medium mb-2">Networks</h3>
                <div className="flex flex-wrap gap-2">
                  {info.detail.networks?.slice(0, 2).map((network) => (
                    <span key={network.id} className="text-white">
                      {network.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video */}
      <div className="px-8 mt-8 mb-12"> 
        <div className="flex-1 text-white max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="ri-play-circle-fill text-[#9340FF] text-2xl"></i>
              <h2 className="text-2xl font-semibold">Trailer</h2>
            </div>
            {info.videos && (
              <a
                href={`https://www.youtube.com/watch?v=${info.videos.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-[#9340FF] hover:bg-zinc-800/50 transition-all duration-300 group"
              >
                <i className="ri-youtube-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-sm font-medium">Watch on YouTube</span>
              </a>
            )}
          </div>
          {info.videos ? (
            <div className="group relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(147,64,255,0.1)] hover:shadow-[0_8px_30px_rgb(147,64,255,0.2)] transition-all duration-300">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${info.videos.key}?autoplay=0&rel=0&modestbranding=1`}
                title={info.videos.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-full aspect-video rounded-xl bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center group hover:bg-zinc-900/60 transition-colors duration-300">
              <div className="text-center">
                <i className="ri-video-off-fill text-4xl text-zinc-600 mb-2"></i>
                <p className="text-zinc-400">No trailer available</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <HorizontalCards data={
        info.recommendations?.results || info.similar?.results || []
      } title="Recommendations"/>
    </div>
  ) : (
    <Loading />
  );
};

export default TVDetails;
