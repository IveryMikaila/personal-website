import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Thanks from "./Components/Thanks";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home />

<Routes>
<Route path="/thanks" element={<Thanks />} />
</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
