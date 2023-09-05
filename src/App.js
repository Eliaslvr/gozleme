import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import Mixtes from './components/Mixtes/Mixtes'
import './assets/index.scss'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Mixtes />} />
      </Routes>
      
    </div>
  );
};

export default App;