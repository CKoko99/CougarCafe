import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import MenuPage from './Components/MenuPage/MenuPage';
function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/menu' element={<MenuPage/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
