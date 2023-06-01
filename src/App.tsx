import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Route, Routes} from "react-router-dom";
import {Index} from "./screen/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/*"} element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
