import React, { useEffect } from "react";
import { FaImdb } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncloadPerson } from "../store/actions/personActions"; // Ensure this path is correct
import Loading from "./Loading";
import HorizontalCards from "./temple/HorizontalCards"; // Assuming you have this component

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncloadPerson(id));
  }, [id, dispatch]);

  if (!info) {
    return <Loading />; // Show loading state while fetching
  }

  return (
    <div className="relative w-screen h-screen bg-[#1F1E24] overflow-x-hidden">
      {/* Backdrop Image */}
      <div className="absolute top-0 left-0 w-full h-[80vh]">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.profile_path}`}
          alt={info.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1E24]/10 via-[#1F1E24]/60 to-[#1F1E24]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-zinc-900/40 backdrop-blur-lg border-b border-zinc-800/30">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group"
            >
              <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform duration-300"></i>
              <span className="text-sm font-medium tracking-wide">Back</span>
            </button>
          </div>
          {info.imdb_id && (
            <a
              href={`https://www.imdb.com/name/${info.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-[#9340FF] hover:bg-zinc-800/50 transition-all duration-300 group"
            >
              <FaImdb className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium tracking-wide">IMDb</span>
            </a>
          )}
        </nav>

        {/* Person Information */}
        <div className="px-8 mt-[25vh] flex gap-8">
          {/* Left Column - Profile Picture and Basic Info */}
          <div className="flex flex-col gap-6">
            <img
              className="w-[200px] rounded-xl shadow-[0_8px_30px_rgb(147,64,255,0.3)] object-cover"
              src={`https://image.tmdb.org/t/p/original/${info.profile_path}`}
              alt={info.name}
            />
            <h1 className="text-3xl font-bold text-white">{info.name}</h1>
            <p className="text-zinc-400">{info.birthday}</p>
            <p className="text-zinc-400">{info.place_of_birth}</p>
          </div>

          {/* Right Column - Biography */}
          <div className="flex-1 text-white">
            <h2 className="text-xl font-semibold mb-2">Biography</h2>
            <p className="text-zinc-300 leading-relaxed">{info.biography}</p>
          </div>
        </div>

        {/* Filmography Section */}
        {info.filmography && info.filmography.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Filmography</h2>
            <HorizontalCards data={info.filmography} title="Movies/Shows" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonDetails;
