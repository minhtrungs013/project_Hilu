import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from '../navbar/navbar';
import Home from './home/home';
import Profile from './profile/profile';
import Practice from './practice/practice';
import PracticePart from './practice/practicePart/practicePart';
import Footer from '../footer/footer';

export default function User() {
  return (
    <div className='home'>
      <div className='grid wide'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/part" element={<PracticePart />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  )
}
