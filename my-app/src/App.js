import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
