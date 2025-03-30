import React from 'react';
import { Link } from 'react-router-dom';
import Topnav from './temple/Topnav';

const ContactUs = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Topnav />
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#9340FF]/10 to-[#9340FF]/5 backdrop-blur-sm border border-zinc-800/50">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#9340FF]/20 to-[#9340FF]/10 rounded-2xl opacity-10 group-hover:opacity-20 blur"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#9340FF] to-[#9340FF]/70 bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Connect with me through various platforms and let's discuss movies, code, or collaboration opportunities.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="mb-12 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <i className="ri-links-fill text-[#9340FF]"></i>
              Social Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://github.com/param11veer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#9340FF]/20 flex items-center justify-center">
                  <i className="ri-github-fill text-2xl text-[#9340FF]"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-[#9340FF] transition-colors duration-200">GitHub</h3>
                  <p className="text-zinc-400 text-sm">@param11veer</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/paramveerudawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#9340FF]/20 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-2xl text-[#9340FF]"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-[#9340FF] transition-colors duration-200">LinkedIn</h3>
                  <p className="text-zinc-400 text-sm">Paramveer Singh Udawat</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/pachoparamveer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#9340FF]/20 flex items-center justify-center">
                  <i className="ri-instagram-fill text-2xl text-[#9340FF]"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-[#9340FF] transition-colors duration-200">Instagram</h3>
                  <p className="text-zinc-400 text-sm">@pachoparamveer</p>
                </div>
              </a>

              <a 
                href="https://x.com/pachoparamveer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#9340FF]/20 flex items-center justify-center">
                  <i className="ri-twitter-x-fill text-2xl text-[#9340FF]"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-[#9340FF] transition-colors duration-200">Twitter</h3>
                  <p className="text-zinc-400 text-sm">@pachoparamveer</p>
                </div>
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="mb-12 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <i className="ri-mail-fill text-[#9340FF]"></i>
              Direct Contact
            </h2>
            <a 
              href="mailto:param11veerudawat@gmail.com"
              className="p-6 rounded-xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 group flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#9340FF]/20 flex items-center justify-center">
                <i className="ri-mail-send-fill text-3xl text-[#9340FF]"></i>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold group-hover:text-[#9340FF] transition-colors duration-200">Email Me</h3>
                <p className="text-zinc-400">param11veerudawat@gmail.com</p>
              </div>
            </a>
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

export default ContactUs;
