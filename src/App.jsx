import React from 'react';
import './styles/index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
