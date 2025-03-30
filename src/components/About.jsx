import React from 'react';
import { Link } from 'react-router-dom';
import Topnav from './temple/Topnav';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Topnav />
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#9340FF]/10 to-[#9340FF]/5 backdrop-blur-sm border border-zinc-800/50">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#9340FF]/20 to-[#9340FF]/10 rounded-2xl opacity-10 group-hover:opacity-20 blur"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#9340FF] to-[#9340FF]/70 bg-clip-text">
              About BadaBing!
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A college project crafted with passion for cinematic exploration.
            </p>
          </div>

          {/* Creator Section */}
          <div className="mb-12 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <i className="ri-user-star-fill text-[#9340FF]"></i>
              Creator
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#9340FF] to-[#9340FF]/70 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img 
                      src="/profile-pic.png" 
                      alt="Paramveer Singh Udawat"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/no-image.avif';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Paramveer Singh Udawat
                </h3>
                <p className="text-zinc-400 mb-4 text-lg">
                  3rd Year Computer Science Student
                </p>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  As a passionate developer and movie enthusiast, I created BadaBing! as my college project to demonstrate modern web development practices while providing a beautiful interface for exploring movies, TV shows, and entertainment content.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-[#9340FF]/20 text-[#9340FF] text-sm font-medium">
                    React.js
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#9340FF]/20 text-[#9340FF] text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#9340FF]/20 text-[#9340FF] text-sm font-medium">
                    TMDB API
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Features */}
          <div className="mb-12 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <i className="ri-film-fill text-[#9340FF]"></i>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-zinc-800/50">
                <i className="ri-movie-2-line text-2xl text-[#9340FF] mb-3"></i>
                <h3 className="text-white font-semibold mb-2">Extensive Library</h3>
                <p className="text-zinc-400">Browse through a vast collection of movies and TV shows with detailed information.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-800/50">
                <i className="ri-search-line text-2xl text-[#9340FF] mb-3"></i>
                <h3 className="text-white font-semibold mb-2">Smart Search</h3>
                <p className="text-zinc-400">Find your favorite content quickly with our intelligent search system.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-800/50">
                <i className="ri-fire-line text-2xl text-[#9340FF] mb-3"></i>
                <h3 className="text-white font-semibold mb-2">Trending Content</h3>
                <p className="text-zinc-400">Stay updated with what's popular in the world of entertainment.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-800/50">
                <i className="ri-responsive-line text-2xl text-[#9340FF] mb-3"></i>
                <h3 className="text-white font-semibold mb-2">Responsive Design</h3>
                <p className="text-zinc-400">Enjoy a seamless experience across all your devices.</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9340FF] text-white font-medium hover:bg-[#9340FF]/90 hover:shadow-[0_0_20px_rgba(147,64,255,0.3)] transition-all duration-300"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
