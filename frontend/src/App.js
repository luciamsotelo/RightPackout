import './App.css';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home_page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
