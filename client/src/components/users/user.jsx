import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from '../navbar/navbar';
import Home from './home/home';

export default function User() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
