import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar"
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
