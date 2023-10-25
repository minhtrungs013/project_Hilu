import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from '../navbar/navbar';
import Home from './home/home';
import Profile from './profile/profile';
import Practice from './practice/practice';

export default function User() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='home'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </div>
  )
}
