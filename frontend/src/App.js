import './App.css';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home_page';
import Pack from './pages/packoutpackback_page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pack" element={<Pack />} />
      
      
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
