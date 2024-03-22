import 'devextreme/dist/css/dx.light.css';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pie from "./components/Pie";
import Bar from "./components/Bar";
import Line from "./components/Line";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pie" element={<Pie />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/line" element={<Line />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
