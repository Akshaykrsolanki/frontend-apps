import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Pagenotfound from './Pages/Pagenotfound'
import Food from "./Pages/Food";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="food/:id" element={<Food/>} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
