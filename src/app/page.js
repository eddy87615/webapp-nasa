'use client';
import { BrowserRouter, Route, Switch, Link, Routes } from 'react-router-dom';
import Star from './Star/Star';
import Home from './Home/Home';
import Astronomy from './Astronomy/Astronomy';
import MarsRover from './MarsRover/MarsRover';
import Weather from './WeatheronMars/Weather';
import Library from './Library/Library';

export default function App() {
  return (
    <>
      <Star />
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Astronomy" element={<Astronomy />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/MarsRover" element={<MarsRover />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
