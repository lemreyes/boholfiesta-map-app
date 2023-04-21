import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;