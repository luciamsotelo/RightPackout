import './App.css';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home_page';
import Pack from './pages/packoutpackback_page';
import Storage from './pages/storage_page';
import Moving from './pages/moving_page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pack" element={<Pack />} />
      <Route path="/storage" element={<Storage />} />
      <Route path="/moving" element={<Moving />} />
      
      
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
