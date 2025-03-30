import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Moviedetails from "./components/Moviedetails";
import TVDetails from "./components/TVDetails";
import PersonDetails from "./components/PersonDetails";
function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/details/:id" element={<Moviedetails />}></Route>
        <Route path="/tv" element={<TvShows />}></Route>
        <Route path="/tv/details/:id" element={<TVDetails />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/popular/details/:id" element={<PersonDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
