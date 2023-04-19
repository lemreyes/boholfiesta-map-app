import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <div className="App">
      <div id="ezoic-pub-ad-placeholder-110"> </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/*<div className="Map-container">
        <div className="Map-padding" ref={divRef}>
        <Map/>
        </div>
        <div className="save-image-button" onClick={downloadJpg}>Save Image</div>
      </div>
  <AdsComponent dataAdSlot='8658257981' />*/}
  </div>
  );
}

export default App;