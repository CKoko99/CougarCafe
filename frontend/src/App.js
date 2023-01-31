import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import MenuPage from './Components/MenuPage/MenuPage';
import ReservationPage from './Components/ReservationPage/ReservationPage';
import About from './Components/About/About';
function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/menu' element={<MenuPage/>} />
        <Route exact path='/reservations' element={<ReservationPage/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
