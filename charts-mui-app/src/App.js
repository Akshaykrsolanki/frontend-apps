import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/Charts";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Charts />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
