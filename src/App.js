import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App bg-[#003049] h-screen">
      <Navbars/>
      <Search  />
      
    </div>
  );
}

export default App;
