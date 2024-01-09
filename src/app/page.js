'use client';
import dynamic from 'next/dynamic';
import { BrowserRouter, Route, Switch, Link, Routes } from 'react-router-dom';
import Star from '@/Star/Star';
import Home from '@/Home/Home';
import Astronomy from '@/Astronomy/Astronomy';
import MarsRover from '@/MarsRover/MarsRover';
import Library from '@/Library/Library';

const DynamicA = dynamic(() => import('@/Home/Home'), { ssr: false });

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Star />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Astronomy" element={<Astronomy />} />
          <Route path="/MarsRover" element={<MarsRover />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
